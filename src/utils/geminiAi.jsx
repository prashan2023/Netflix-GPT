import { GoogleGenAI } from "@google/genai";
import React from "react";
 
export const ai = new GoogleGenAI({apiKey: import.meta.env.VITE_GEMINI_API_KEY});
 
