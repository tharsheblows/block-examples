# Block examples

Like a lot of development everywhere, these may go out of date fairly quickly. However I've found that for me, the things I learn doing block development build on each other so don't let that stop you.

## Important notes

- As always, don't use in production. I don't know why you'd want to but just in case.
- The block added is called "Basic Block", it has text with gradient background on a solid background box.

## To run this

You need to have Docker installed and running on your machine. Also PHP 8.2.

1. run `nvm use` (or make sure you're using node v18.15.0)
2. run `npm install`
3. run `npm run build` – going straight to `npm run dev` doesn't build the `view.js` files correctly
4. run `npm run dev`

The site will be on [http://localhost:8888/](http://localhost:8888/)

You can log in with the username "admin" and the password "password", it uses `wp-env`.

## Less important notes

- this installs WordPress via the roots package for xdebug reasons. Is it possible to use xdebug and step through WordPress with wp-env out of the box? What's the mapping?
- there is a pre-commit hook that lints everything
- I stash all my hooks in one class which I think of like a table of contents of the plugin. No one else does this but it works for me; it helps when I come back to things and think what was I doing here? But again, people think it's weird. Whatever.
- phpstan is set to level 8, this is probably unsustainable
- the autoload is that WordPressy autoload way that people use
- the build is with `wp-scripts` out of the box
- no tests, sorry, it would be fun to add some though
