# ReactNativeExp

### Creating project:

* `react-native init <Project Name>`

* `npm install --save realm`

* `react-native link realm`

### Installing Realm Object Server

#### Setup Realm's PackageCloud repository
`curl -s https://packagecloud.io/install/repositories/realm/realm/script.deb.sh | sudo bash`

#### Update the repositories
`sudo apt-get update`

#### Install the Realm Object Server
`sudo apt-get install realm-object-server-developer`

#### Enable and start the service
`sudo systemctl enable realm-object-server`

`sudo systemctl start realm-object-server`

#### Checking Server status 
`sudo systemctl status realm-object-server`


