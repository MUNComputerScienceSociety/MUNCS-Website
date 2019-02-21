workflow "Deploy new site versions" {
  on = "push"
  resolves = [
    "Build Lektor content",
    "Deploy to GitHub Pages",
  ]
}

action "Deploy to GitHub Pages" {
  uses = "maxheld83/ghpages@v0.2.1"
  needs = ["Build Lektor content"]
  secrets = ["GH_PAT"]
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@46ffca7632504e61db2d4cb16be1e80f333cb859"
  runs = "branch master"
}

action "Build Lektor content" {
  uses = "./lektor-build-action"
  needs = ["Filters for GitHub Actions"]
}
