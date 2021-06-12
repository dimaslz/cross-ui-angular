module.exports = {
  "github": {
    "push": false
  },
	"npm": {
    "publish": false,
    "publishPath": "dist"
	},
	"hooks": {
    // "before:init": ["npm run lint", "npm test"],
    // "after:my-plugin:bump": "./bin/my-script.sh",
    "before:bump": "NODE_ENV=production yarn build angular",
    "before:git:release": "echo After git push, before github release",
    "before:release": "echo Successfully released ${name} v${version} to ${repo.repository}."
  },
  "git": {
    "commitMessage": "chore: release v${version}"
  }
}