import amf from './amf.js'

var server = "./server/amf.php";
var amfClient = new amf.Client("amfphp", server);

export default amfClient;
