#git checkout -b gh-pages
#checkout gh-pages
#git rm -rf .
#git commit -am "First commit to gh-pages branch"
#git push origin gh-pages
#git subtree split --prefix dist gh-pages
#git checkout -b gh-pages

git rm -rf public
mkdir public
hugo
git add public && git commit -m "pushing to ph-pages"
git push origin `git subtree split --prefix public gh-pages`:gh-pages --force
