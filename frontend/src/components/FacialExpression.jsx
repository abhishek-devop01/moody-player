import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";

export default function FacialExpression({ setSongs }) {
  const videoRef = useRef();
  const [mood, setMood] = useState(null);

  const EXPRESSION = {
    happy: "",
    sad: "",
    angry: "",
    fearful: "",
    disgusted: "",
    surprised: "",
    neutral: "",
  };

  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing webcam: ", err));
  };

  async function detectMood() {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();
    let mostProableExpression = 0;
    let _expression = "";

    if (!detections || detections.length === 0) {
      console.log("No face detected");
      return;
    }

    for (const expression of Object.keys(detections[0].expressions)) {
      if (detections[0].expressions[expression] > mostProableExpression) {
        mostProableExpression = detections[0].expressions[expression];
        _expression = expression;
        console.log(_expression);
      }
    }

    setMood({ label: _expression, exp: EXPRESSION[_expression] || "" });

    // axios.get(`http://localhost:3000/songs?mood=${_expression}`)
    // .then(response=>{
    //     console.log(response.data);
    //     setSongs(response.data.songs)

    // })
  }

  useEffect(() => {
    loadModels().then(startVideo);
  }, []);

  return (
    <div className="mood-element flex items-center justify-center gap-20 pt-10 ">
      <video
        ref={videoRef}
        autoPlay
        muted
        className="user-video-feed border-2 rounded-xl overflow-hidden text-zinc-400 bg-zinc-900 h-[28vh] w-[18vw]"
      />
      <div className="mood-display text-zinc-200 flex flex-col items-center gap-2">
        <div className="text-sm text-zinc-400">Detected mood</div>
        <div className="flex items-center gap-3">
          <div className="exp text-4xl">{mood ? mood.exp : "—"}</div>
          <div className="label text-xl font-semibold">
            {mood ? mood.label : "No mood"}
          </div>
        </div>
      </div>
      <button
        className=" text-zinc-400 bg-zinc-900 px-4 py-2 rounded-xl"
        onClick={detectMood}
      >
        Detect Mood
      </button>
    </div>
  );
}
