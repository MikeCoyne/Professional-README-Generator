// function initLicense(licenses) {
//     if (license !-- "none") {

//     };
// };

function READMEg(data) {

    return `# ${data.title}
    ## Title 
    ${data.Title};

    ## Description
    ${data.Description}

    ## Table of Contents
    1. Title
    2. Description
    3. Table of Contents
    4. Installation
    5. Usage
    6. License
    7. Contributors
    8. Tests
    9. Questions

    ## Description
    ${data.description}

    ## Installation
    ${data.Installation}

    ## Usage
    ${data.Usage}

    ## License
    ${data.License}

    ## Contributors
    ${data.Contributors}

    ## Tests 
    ${data.Tests}

    ## Questions
    ${data.Questions}`

};

module.exports = READMEg;