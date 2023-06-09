function main() {
  



var apiUrl = "https://www.whoisxmlapi.com/whoisserver/WhoisService";
var url = document.getElementById("url").value;

        // Fill in your details
        var apiKey = "Your Whois API key";
        var domain = url;
        var format = "JSON";
        var jsonCallback = "LoadJSON";

        window.addEventListener("load", onPageLoad, false);

        function onPageLoad() {
            // Use a JSON resource
            var url = apiUrl
                    + "?domainName=" + encodeURIComponent(domain)
                    + "&apiKey=" + encodeURIComponent(apiKey)
                    + "&outputFormat=" + encodeURIComponent(format);

            // Dynamically Add a script tag to get our JSON data from a
            // different server, avoiding cross origin problems.

            var head = document.getElementsByTagName("head")[0];
            var script = document.createElement("script");

            // The function specified in jsonCallback will be called with a
            // single argument representing the JSON object.

            script.type = "text/javascript";
            script.src = url + "&callback=" + jsonCallback;

            head.appendChild(script);
        }

        // Do something with the json result
        function LoadJSON(result) {
            // Print out a nice informative string
            document.body.innerHTML += "<div>JSON:</div>"
                                    + RecursivePrettyPrint(result);
        }

        function RecursivePrettyPrint(obj) {
            var str = "";

            for (var x in obj) {
                if (obj.hasOwnProperty(x)) {
                    str += '<div style="'
                        +  "margin-left: 25px;border-left:1px solid black"
                        +  '">' + x + ": ";
                    if (typeof(obj[x]) == "string")
                        str += obj[x];
                    else
                        str += RecursivePrettyPrint(obj[x]);
                    str += "</div>";
                }
            }

            return str;
        }
      }