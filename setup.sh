# Michaela Buchanan - 10/2/20
# Mark III Systems


# This script will do all the basic setup for the demo including installing Node.js and the required python libraries

#!/bin/sh

curl -sL https://deb.nodesource.com/setup_10.x | bash -

apt install nodejs

echo "INSTALLED: Node.js"
node --version

# install Google Coral requirements (found here https://www.coral.ai/docs/accelerator/get-started/)

echo "deb https://packages.cloud.google.com/apt coral-edgetpu-stable main" | tee /etc/apt/sources.list.d/coral-edgetpu.list
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -
apt-get update
apt-get install libedgetpu1-std

# start Node.js site
node index.js
