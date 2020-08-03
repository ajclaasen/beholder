# Beholder

An Ionic application to show monsters created on the [Monster Maker](https://github.com/rjclaasen/monstermaker) website.

## License

All source code is available under the GNU General Public License. See [LICENSE](LICENSE) for details.

## Dependencies

* Node
* Cordova
* Ionic
* Firefox*
* Chrome*

*Either of these dependencies can be skipped by removing the browser you do not want to test for in `karma.conf.js`.

## Getting Started

To run Beholder yourself, clone the repo and then install the needed dependencies.
```
npm install
```
Finally, run the test suite to verify that everything is working correctly.
```
npm test
```
If the test suite runs correctly, you'll be ready to run the app.
```
ionic serve
```