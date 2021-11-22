const programs = [
    {
        id: 1,
        name: 'Global Electrolux Talent Program - OT & Connectivity Specialist',
        location: 'Stockholm',
        time: '6-18 months',
        category: 'global-talent',
        img: 'https://s3.eu-west-1.amazonaws.com/gis-production-eu/7YoxdYTqTuv7TiqQf7VxCGHi',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus porro rem, minus magni corporis iusto molestias vel debitis iste deleniti quos earum, voluptate ab! Facilis debitis vitae officia! Nobis, ab?'
    },
    {
        id: 2,
        name: 'Global Electrolux Talent Program - Advanced Development Innovation Engineer',
        location: 'Rothenburg',
        time: '6-18 months',
        category: 'global-talent',
        img: 'https://s3.eu-west-1.amazonaws.com/gis-production-eu/ezRkjufoK21971yeTxAhL3e7',
        desc: 'The Global Electrolux Talent Program is a proactive initiative that brings together young talent across various functions and global offices of Electrolux. This program is for you, who are interested in a global, hands-on experience in an intercultural setting with the goal of securing global employment opportunities within the company upon a successful completion of the internship.'
    },
    {
        id: 3,
        name: 'IS Project Officer',
        location: 'Paris, France',
        time: '6-18 months',
        category: 'global-talent',
        img: 'https://s3.eu-west-1.amazonaws.com/gis-production-eu/LmDk2581rxXinKfpuCsttyMo',
        desc: 'The IS Project officer reviews together with the business all operational and technical issues. Exchange with the IS/IT teams on possible enhancements and ensures the shift left of the know how to the business. The IS Project officer ensures the good functionality of all the local applications in his/her domain. He/she assists the key user with the writing of business requirements and review with his IS/IT colleagues the possible solutions to be implemented.'
    },
    {
        id: 4,
        name: 'Teaching - Assistant in the Faculty of Health Sciences',
        location: 'Manizales, Colombia',
        time: '6-18 months',
        category: 'global-teacher',
        img: 'https://s3.eu-west-1.amazonaws.com/gis-production-eu/Cr3HBYjKgWCSMrDKModiq8RK',
        desc: 'You will be an assistant Assistant in the Faculty of Health Sciences, helping in the entire process of the program related to this area. You will design thematic content in English. You will hold conversation meetings with teachers and students. You will design strategies to strengthen the English language program in engineering and telecommunications systems students. You will participate in a Global Village promoted by AIESEC.'
    },
    {
        id: 5,
        name: 'English Teacher',
        location: 'Ismailia 2, Egypt',
        time: '6-18 months',
        category: 'global-teacher',
        img: 'https://s3.eu-west-1.amazonaws.com/gis-production-eu/XxjQLrB4h7hbZKKisGrJWXwD',
        desc: 'We are looking for an English teacher who can teach conversation, IELTS and TOEFL classes.'
    },
    {
        id: 6,
        name: 'Female German Teacher',
        location: 'Gurugram, India',
        time: '6-18 months',
        category: 'global-teacher',
        img: 'https://s3.eu-west-1.amazonaws.com/gis-production-eu/zhqsFRgcnbeBvA2eMWoMsHAE',
        desc: 'Develop lesson plans and learning goals with the head teacher Maintain daily records, track student progress and intervene to help students progress as necessary Foster a positive and collaborative learning environment where the unique needs of all students are met Arrange educational activities outside the classroom and supervise the students during breaks and mealtime Regularly communicate with family members and other staff, such as school psychologists and counselors, in order to meet the individual needs of each student Ensure the classroom environment meets standards for safety and cleanliness'
    },
    {
        id: 7,
        name: 'ARCOS - Architecture & Engineering Project in an Agroforestry',
        location: 'Asa Norte, Brazil',
        time: '6-18 months',
        category: 'global-volunteer',
        img: 'https://s3.eu-west-1.amazonaws.com/gis-production-eu/Uwf3V3Hdi8ZLQFN2V4qmcR2q',
        desc: "ARCOS is a project based on the development of the community. Some NGOs don't have the infraestructure neither the support form to government to continue impacting our community. Together with the organization, the project aims to build and help raising more proper spaces for the volunteers and families to work and develop themselves."
    },
    {
        id: 8,
        name: 'MUSICITY - Change lives with music in Aracaju, Brazil',
        location: 'Cirurgia, Brazil',
        time: '6-18 months',
        category: 'global-volunteer',
        img: 'https://s3.eu-west-1.amazonaws.com/gis-production-eu/axdPxq3A4uwUsCMSCDLnkveo',
        desc: 'Musicity focuses on promoting quality education and self-development through the teaching of Music and SDGs. The project aims to develop leadership skills, creativity and self-knowledge for children, learning music theory, singing and practicing music in a multicultural environment. Volunteers will work with vulnerable children and / or adolescents to better understand their realities and raise awareness of social issues such as diversity, tolerance, self-discipline and social responsibility.'
    },
    {
        id: 9,
        name: 'MUSICITY - Change lives with music in Aracaju, Brazil',
        location: 'Santa Maria, Brazil',
        time: '6-18 months',
        category: 'global-volunteer',
        img: 'https://s3.eu-west-1.amazonaws.com/gis-production-eu/D7T5FDHxLxM39QRu6nF3gcZa',
        desc: 'Musicity focuses on promoting quality education and self-development through the teaching of Music and SDGs. The project aims to develop leadership skills, creativity and self-knowledge for children, learning music theory, singing and practicing music in a multicultural environment. Volunteers will work with vulnerable children and / or adolescents to better understand their realities and raise awareness of social issues such as diversity, tolerance, self-discipline and social responsibility.'
    },

];

//selectors:
const output = document.querySelector('.output');
const btnAll = document.getElementById('all')
const btnTalent = document.getElementById('global-talent')
const btnTeacher = document.getElementById('global-teacher')
const btnVolunteer = document.getElementById('global-volunteer')

//event handlers:
btnAll.addEventListener('click', loadAll);
btnTalent.addEventListener('click', () => {
    const category = 'global-talent';
    filter(category);
});
btnTeacher.addEventListener('click', () => {
    const category = 'global-teacher';
    filter(category);
});
btnVolunteer.addEventListener('click', () => {
    const category = 'global-volunteer';
    filter(category);
});

loadAll();


//functions:
function loadAll() {
    output.textContent = "";
    programs.forEach(program => {
        createPost(program);
    });
}

function createPost(program) {
    const item = document.createElement('div');
    item.classList.add('item');
    const img = document.createElement('img');
    img.setAttribute('src', program.img);
    item.appendChild(img);
    const info = document.createElement('div');
    info.classList.add('info');
    const name = document.createElement('h3');
    name.setAttribute('id', 'name');
    name.innerText = program.name;
    info.appendChild(name);
    const locationTime = document.createElement('div');
    locationTime.setAttribute('id', 'location-time');
    const location = document.createElement('h4');
    location.setAttribute('id', 'location');
    location.innerText = program.location;
    locationTime.appendChild(location);
    const time = document.createElement('h4');
    time.setAttribute('id', 'time');
    time.innerText = program.time;
    locationTime.appendChild(time);
    info.appendChild(locationTime);
    const infoID = document.createElement('h4');
    infoID.setAttribute('id', 'info');
    infoID.innerText = program.desc;
    info.appendChild(infoID);
    item.appendChild(info);

    output.appendChild(item);

}

function filter(category) {
    output.textContent = "";
    programs.forEach((program) => {
        if (program.category === category) {
            createPost(program);
        }
    });
}