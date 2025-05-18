# My Learning Steps

<details open>
  <summary>📂 Main Page</summary>
  <details>
    <summary>🍔 Burger</summary>
    <ul>
      <li>🥩 Meat</li>
      <li>🍞 Bred</li>
      <li>🥗 Tomatos</li>
    </ul>
  </details>
  <details>
    <summary>🍟 Chips</summary>
    <p>Classical Order</p>
  </details>
</details>



<details>
  <summary>DEV Commands</summary>

## run

python run.py

## docker control

### stop docker

docker-compose down

### run docker

docker build .

### run docker

docker-compose up -d

### FAST

docker-compose down; docker-compose up -d

## Git CHEATSHEET

### load last updates and replace existing local files

git fetch origin; git reset --hard origin/master; git clean -fd

### select a hash from the last 10 commits

git log --oneline -n 10

### use the hash to retrieve exactly that local state

git fetch origin; git checkout master; git reset --hard 1eaef8b;; git clean -fdx

### Quick github update

git add .
git commit -m "fixed colmn of gifs"
git push

</details>
