import ltiProviderImage from './assets/lti_provider.jpg';
import websiteImage from './assets/jay-mantri-TFyi0QOx08c-unsplash.jpg';
import pythonRsaImage from './assets/python_rsa.png';

export const githubLink = "https://github.com/colinperepelken";
export const linkedinLink = "https://linkedin.com/in/colin-perepelken"


export const projectData = [
    {
        title: "LTI provider for Canadian school districts",
        content: "I developed an LTI provider plugin to distribute course content to school districts across Western Canada. The provider handles millions of student requests for resources every year and has been integrated into Moodle, Canvas, and D2L.",
        image: ltiProviderImage,
        github: 'https://github.com/wcln/moodle-local_lti'
    },
    {
        title: "My personal website",
        content: "I built this website from scratch as an excuse to learn ReactJS and Material UI.",
        image: websiteImage,
        github: 'https://github.com/colinperepelken/colin.perepelken.ca'
    },
    {
        title: "Python RSA implementation",
        content: "A Python implementation of the RSA cryptosystem. Created for my own learning purposes. Capable of generating extremely simple and breakable (but functionally correct) public and private keys. These keys can be used from the command line to encrypt and decrypt files.",
        image: pythonRsaImage,
        github: 'https://github.com/colinperepelken/python-rsa'
    },
];