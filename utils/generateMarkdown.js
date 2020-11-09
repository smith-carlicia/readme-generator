// function to generate markdown for README
function generateMarkdown(data) {
  return `# 
  ### ${data.title}
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen)](https://opensource.org/license/${data.license})

  ## Description :
  ${data.description}

  ## Table of Contents :
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usuage)
  *[Site Link](#Site Link)
  *[GitHub URL](#GitHub URL)
  *[Credits](#Credits)
  *[License](#License)
  *[Badge](#Badge)
  *[Contributors](#Contributors)
  *[Tests](#Tests)

  ## Installation :
  ${data.installation}

  ## Usage :
  ${data.usage}

  ## Site Link: 
  ${data.siteLink}
  
  ## GitHub URL:
  ${data.repoLink}
  ## Credits : 
  ${data.credits}

  ## License :
  ${data.license}

  ## Badge :
  ${data.badges}

  ## Contributors :
  ${data.contributing}

  ## Test :
  ${data.tests}

  ## Questions :
  If you want to contact me :

        GitHub : [${data.githubUsername}](https://github.com/smith-carlicia)
        Linkedin : [${data.linkedinUrl}](https://www.linkedin.com/in/carlicia-smith-613194b4/)
        Email : [${data.emailAddress}] <smith.carlicia@gmail.com>
`
};

module.exports = generateMarkdown;
