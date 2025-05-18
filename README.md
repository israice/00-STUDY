# My Learning Steps


## DEV VERSIONS
### v0.0.1
- created /core/ as main school folder
- files .gitignore and main README.md updated


## GIT CHEATSHEET
### load last updates and replace existing local files
git fetch origin; git reset --hard origin/master; git clean -fd
### select a hash from the last 10 commits
git log --oneline -n 10
### use the hash to retrieve exactly that local state
git fetch origin; git checkout master; git reset --hard 1eaef8b;; git clean -fdx
### Quick github update
git add .
git commit -m "created /core/ as main school folder"
git push
