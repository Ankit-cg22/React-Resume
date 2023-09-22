export const Languages_Info = {
    title : "Languages" ,
    list: [
            {text : "C++" , icon : "./icons/c++.png"}, 
            {text : "C" , icon : "./icons/c.png"},
            {text : "Java" , icon : "./icons/java.png"},
            {text : "JavaScript" , icon : "./icons/javascript.png"}
        ]
}

export const Techstack_Info = {
    title : "Tech Stack" ,
    list : [
            {text : "ReactJS" , icon : "./icons/reactjs.png"}, 
            {text : "NodeJS" , icon : "./icons/nodejs.png"},
            {text : "NextJs" , icon : "./icons/nextjs.png"},
            {text : "MongoDB" , icon : "./icons/mongodb.png"} , 
            {text : "Postgres" , icon : "./icons/postgres.png"}
        ]
}

export const KeyCourses_Info = {
    title:"Key Courses" ,
    list : [
            {text : "DSA" , icon : "./icons/dsa.png"}, 
            {text : "OOPS" , icon : "./icons/oops.png"},
            {text : "CN" , icon : "./icons/network.png"},
            {text : "RDBMS" , icon : "./icons/database.png"}
        ]
}

export const Experience_Info = [
    {
        company : "Rablo.in" ,
        position : "Backend Developer Intern" ,
        start : "Oct 2022" ,
        end : "Jan 2023" ,
        techStack : ["Node JS" , "Express JS" , "React JS" , "Tailwind CSS"] ,
        certificateLink:"https://drive.google.com/file/d/19u0bFC9v82osQGTvtVms3R5gMrQeL253/view?usp=share_link",
        workDetails : [
            "Developed APIs using NodeJS and ExpressJS and integrated them with frontend components.",
            "Designed schemas for MongoDB databases and integrated them with the server.",
            "Worked on MFE(micro frontend) architecture.",
            "Performed as the team lead for the team of backend interns"
        ]
    },
    {
        company : "Metadev" ,
        position : "Frontend Developer Intern" ,
        start : "Mar 2022" ,
        end : "May 2022" ,
        techStack : ["Next JS" , "Tailwind CSS"] ,
        certificateLink:"https://drive.google.com/file/d/1ovOBBJsnbwWuyAwiYkl1Hu3l9vZ6nWA5/view?usp=sharing",
        workDetails : [
            "Developed new user-facing features using NextJS and Tailwind CSS .",
            "Built reusable, responsive components for future use."
        ]
    }
]

export const Project_Info = [
    {
        title : "Codespace" , 
        techStack : ["NextJS" , "Tailwind CSS" , "NodeJS" , "ExpressJS" , "Postgres" , "Socket.io"] ,
        githubURL : "https://github.com/Ankit-cg22/codespace-client",
        websiteURL : "https://codespace-frontend-ecru.vercel.app/" ,
        projectDescription:[
            "Platform for real time , collaborative coding . Users can create and join rooms for collaborative coding sessions.",
            "Implemented real time editor and drawing board using websockets .", 
            "Implemented real time voice chat using webRTC."
        ]
    },
    {
        title : "DOTS" , 
        techStack : ["ReactJS" , "NodeJS" , "ExpressJS" , "MongoDB"] ,
        githubURL : "https://github.com/Ankit-cg22/DOTS",
        websiteURL : "https://dots-blog-app.netlify.app/" ,
        projectDescription:[
            "Camping blog platform with feature to share location.",
            "Implemented backend caching using Redis and user authorization using JWT ." ,
            "Worked with google maps API and open cage API for location sharing feature."
        ]
    }
]

export const Achievements_info = [
    "Maximum rating of 1680(Expert) on Codeforces , 2053(5 star) on Codechef .",
    "Rating of 2100+(Guardian) on Leetcode(top 1.1% worldwide)." , 
    "Achieved global rank 1348 out of 10000+ participants in Google Kickstart round F 2022.",
    "Qualified till 3rd round of Meta Hackercup 2022."
]

export const Education_info = [
    {
        institution : "International Institute of Information Technology , Bhubaneswar" , 
        degree : "B.Tech" ,
        discipline : "CSE" ,
        grade : "CGPA : 8.60" ,
        start : "Dec 2020" ,
        end : "Present" 
    },
    {
        institution : "Kendriya Vidyalaya No 1 , Bhubaneswar" , 
        degree : "Higher Secondary Education" ,
        discipline : "PCM" ,
        grade : "Percentage : 96.2% " ,
        start : "Apr 2018" ,
        end : "Mar 2020"    
    }
]