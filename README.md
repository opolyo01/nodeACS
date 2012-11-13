Node.ACS is pretty exciting framework for getting your node js applications to talk to the Cloud.  I started step by step with documentation on
https://cloud.appcelerator.com/docs/nodeacs/custom_code_tutorial#quickstart but got stuck on the step where I needed to authenticate before
creating users and places.
Here's gotcha #1:

- Use the proper key/secret in ACS.init('my_oauth_key', 'my_oauth_secret');  Note that there's both development and production pairs.
I spend more than hour, and pinging Arthur Evans before realizing it.

Gotcha #2

- You can call ACS related functions only in the scope api.  I tried invoking ACS.Places.create from private function, but it didn't work

I posted my hack of today into https://github.com/opolyo01/nodeACS 