// require('dotenv').config()
// const { GoogleGenAI } = require('@google/genai')

// const resumeAnalysePrompt = `
//             Analyze the uploaded resume PDF.

//             Return ONLY valid JSON using this structure:

//         {
//             "candidate": {
//                 "name": "",
//                 "email": "",
//                 "phone": "",
//                 "location": "",
//                 "summary": ""
//         },
//             "education": [],
//             "experience": [],
//             "skills": {
//                 "technical": [],
//                 "programming_languages": [],
//                 "frameworks": [],
//                 "tools": [],
//                 "soft_skills": []
//         },
//             "projects": [],
//             "certifications": [],
//             "ats_analysis": {
//                 "overall_score": 0,
//                 "formatting_score": 0,
//                 "keyword_score": 0,
//                 "skills_score": 0,
//                 "experience_score": 0,
//                 "section_structure_score": 0,
//                 "issues": []
//         },
//             "strengths": [],
//             "weaknesses": [],
//             "improvements": [],
//             "recommended_job_roles": []
//         }

//     Rules:
//     - Analyze only the information present in the uploaded PDF.
//     - Never invent or assume information.
//     - Use "Not mentioned in the resume." when information is unavailable.
//     - ATS scores must be between 0 and 100.
//     - Give practical and specific improvement suggestions.
//     - Return ONLY valid JSON. No markdown, no explanation outside JSON.
// `


// const ai = new GoogleGenAI({
//     apiKey: process.env.AI_API_KEY
// })

// async function connectingAi(resumetext) {

//     let attempt = 3

//     for (let i = 0; i <= attempt; i++) {

//         try {

//             const response = await ai.models.generateContent({
//                 model: "gemini-3.6-flash",
//                 contents: `${resumeAnalysePrompt}  RESUME CONTENT: ${resumetext}`
//             })
//             console.log(response.text);

//             return response.text
//         }
//         catch (err) {

//             console.log(`Gemini attempt ${i} failed`, err.status);

//             if (err.status === 503 && i < attempt) {

//                 console.log("Model busy, Retrying.....");

//                 await new Promise(resolve =>
//                     setTimeout(resolve, 1000)
//                 )
//             }
//             else {
//                 throw err;
//             }


//         }
//     }
// }

// module.exports = connectingAi