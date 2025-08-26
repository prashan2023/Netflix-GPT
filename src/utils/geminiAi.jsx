import { GoogleGenAI } from "@google/genai";
 
 
export const ai = new GoogleGenAI({apiKey: import.meta.env.VITE_GEMINI_API_KEY});
 
