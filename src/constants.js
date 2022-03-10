import ltiImage from './assets/lti_dashboard.png';
import lorImage from './assets/wcln_lor.png';
import bikeGearsImage from './assets/bike_gears.png';
import websiteImage from './assets/jay-mantri-TFyi0QOx08c-unsplash.jpg';
import blogImage from './assets/varun-yadav-QhYTCG3CTeI-unsplash.jpeg';
import pythonRsaImage from './assets/python_rsa.png';

export const githubLink = "https://github.com/colinperepelken";
export const linkedinLink = "https://linkedin.com/in/colin-perepelken"


export const projectData = [
    {
        title: "Bike Gears",
        content: "This website allows cyclists to compute gear ratios, gear inches and several other useful calculations. It provides dynamic graphs, auto-generated insights, and table data to help users choose suitable gearing for their bikes. Users can compare results for multiple bikes at the same time, and can read more about each calculation by visiting the 'Learn' section.",
        technologies: 'Vue.js, Bulma',
        image: bikeGearsImage,
        github: 'https://github.com/colinperepelken/bikegears',
        url: 'https://bikegears.ca'
    },
    {
        title: "LTI Provider for Canadian School Districts",
        content: "I developed an LTI provider plugin to distribute courses to school districts across Western Canada. The provider handles millions of student requests for resources every year and has been integrated into Moodle, Canvas, and D2L.",
        technologies: 'Moodle, LTI, Vue.js, PHP',
        image: ltiImage,
        github: 'https://github.com/wcln/moodle-local_lti'
    },
    {
        title: "Learning Object Repository",
        content: "Created a Learning Object Repository (LOR) using Vue.js to store and manage 5000+ games, projects, video tutorials and other resources which can be embedded in courses by teachers to assist with online learning.",
        technologies: 'Moodle, Vue.js, PHP',
        image: lorImage,
        github: 'https://github.com/wcln/moodle-local_lor',
        url: 'https://wcln.ca/local/lor/index.php'
    },
    {
        title: "My Personal Website",
        content: "I built this website from scratch as an excuse to learn ReactJS and Material UI.",
        technologies: 'ReactJS, Material UI',
        image: websiteImage,
        github: 'https://github.com/colinperepelken/colin.perepelken.ca'
    },
    {
        title: "Blog",
        content: "A work in progress. Once complete, I plan on writing about bicycle travel, maintenance, and software development.",
        technologies: 'ReactJS, TypeScript, Node.js',
        image: blogImage,
        github: 'https://github.com/colinperepelken/blog'
    },
    {
        title: "Python RSA Implementation",
        content: "A Python implementation of the RSA cryptosystem. Created for my own learning purposes. Capable of generating extremely simple and breakable (but functionally correct) public and private keys. These keys can be used from the command line to encrypt and decrypt files.",
        technologies: 'Python',
        image: pythonRsaImage,
        github: 'https://github.com/colinperepelken/python-rsa',
    },
];
