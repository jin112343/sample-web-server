# sample-web-server
テクノロジー（藤原）Node.jsによるサンプルWebサーバ

```
JinnoMacBook-Pro:~ jinmizou$ cd ~/fujiwara
JinnoMacBook-Pro:fujiwara jinmizou$ git clone https://github.com/jin112343/sample-web-server.git]
[Cloning into 'sample-web-server.git]'...
fatal: unable to access 'https://github.com/jin112343/sample-web-server.git]/': The requested URL returned error: 400
JinnoMacBook-Pro:fujiwara jinmizou$ git clone https://github.com/jin112343/sample-web-server.git
Cloning into 'sample-web-server'...
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 7 (delta 1), reused 5 (delta 1), pack-reused 0
Unpacking objects: 100% (7/7), done.
JinnoMacBook-Pro:fujiwara jinmizou$ cd samp;e-web-server
-bash: cd: samp: No such file or directory
-bash: e-web-server: command not found
JinnoMacBook-Pro:fujiwara jinmizou$ cd sample-web-server
JinnoMacBook-Pro:sample-web-server jinmizou$ code .
JinnoMacBook-Pro:sample-web-server jinmizou$ curl --silent --request GET --url hhtps://api.thecati.com/v1/images/search
JinnoMacBook-Pro:sample-web-server jinmizou$ curl --silent --request GET --url https://api.thecatapi.com/v1/images/search
[{"breeds":[],"id":"4do","url":"https://cdn2.thecatapi.com/images/4do.gif","width":400,"height":225}]JinnoMacBook-Pro:sample-web-server jinmizou$ curl --silent ttps://api.thecatapi.com/v1/images/search
[{"breeds":[],"id":"1su","url":"https://cdn2.thecatapi.com/images/1su.jpg","width":538,"height":527}]JinnoMacBook-Pro:sample-web-server jinmizou$ curl --silent ttps://api.thecatapi.com/v1/images/search
[{"breeds":[],"categories":[{"id":1,"name":"hats"}],"id":"39r","url":"https://cdn2.thecatapi.com/images/39r.jpg","width":1024,"height":680}]JinnoMacBook-Pro:sample-web-server jinmizou$ brew install jq
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> New Formulae
allureofthestars                         ipopt
appstream-glib                           itk
atlantis                                 ktlint
boringtun                                leela-zero
catch2                                   libzt
cfn-lint                                 lizard
cjson                                    molten-vk
clojure-lsp                              newman
clzip                                    otf2
cpp-gsl                                  pipx
csvq                                     pprint
cubelib                                  procs
cypher-shell                             proteinortho
dbmate                                   scala@2.12
deno                                     scdoc
docker-machine-driver-vmware             scws
drone-cli                                spice-gtk
dust                                     spirv-tools
erlang@21                                swig@3
gcc@8                                    termshark
heatshrink                               terraform@0.11
hey                                      terraformer
include-what-you-use                     virgil
==> Updated Formulae
abyss                                    libsass
acpica                                   libshout
agda                                     libsigc++
aide                                     libsodium
akamai                                   libsoup
akka                                     libswiften
aliyun-cli                               libtorrent-rasterbar
allure                                   libtrace
amazon-ecs-cli                           libuv
ammonite-repl                            libvirt
angular-cli                              libvisio
ansible                                  libwpd
ansifilter                               libwpg
ant                                      libxc
ant@1.9                                  libxo
anyenv                                   lighttpd
apache-archiva                           lilv
apache-drill                             linkerd
apache-geode                             llvm
apache-spark                             lmod
app-engine-python                        logstash
arangodb                                 logtalk
aravis                                   lsd
argyll-cms                               lv2
armadillo                                lwtools
arpack                                   lxc
artifactory                              lynis
asciidoctor                              lysp
asciidoctorj                             lz4
asdf                                     lzip
ask-cli                                  mackup
aspectj                                  macvim
astrometry-net                           mafft
atari800                                 mailutils
atlassian-cli                            mame
atomist-cli                              mapnik
auditbeat                                mariadb
augeas                                   mariadb-connector-c
autorest                                 mariadb@10.1
avra                                     mariadb@10.2
avro-c                                   mat2
avro-cpp                                 math-comp
avro-tools                               maxima
aws-iam-authenticator                    maxwell
aws-okta                                 mbedtls
aws-sdk-cpp                              mdds
awscli                                   mdk
axel                                     media-info
azure-cli                                memcached
azure-storage-cpp                        mercurial
b2-tools                                 mesa
babel                                    meson
babl                                     mesos
badtouch                                 metaproxy
ballerina                                metricbeat
bartycrouch                              mgba
basex                                    micronaut
bash                                     micropython
bat                                      mighttpd2
bazel                                    mill
bear                                     mimic
bedops                                   mingw-w64
bee                                      minimal-racket
bettercap                                minio
binaryen                                 minio-mc
bind                                     mk-configure
binwalk                                  mkl-dnn
bison                                    mksh
bit                                      mkvtoolnix
bitcoin                                  mlt
bitrise                                  mmark
bitwarden-cli                            mmseqs2
blast                                    molecule
bluepill                                 monero
boost                                    monetdb
boost-bcp                                mongo-c-driver
boost-build                              mongoose
boost-mpi                                mono-libgdiplus
boost-python                             mosquitto
boost-python3                            mpck
botan                                    mpd
bowtie2                                  mpich
braid                                    mplayer
buildifier                               mpop
buildkit                                 mps-youtube
buku                                     mruby
bwfmetaedit                              msgpack
byteman                                  msktutil
bzt                                      msmtp
caffe                                    mtools
calicoctl                                mu
camlp4                                   mupdf
cargo-completion                         mupdf-tools
carla                                    mutt
cc65                                     mvnvm
ccache                                   mypy
ccextractor                              mysql
ccls                                     n
certbot                                  nagios
cfengine                                 nano
cfr-decompiler                           nanopb-generator
cgal                                     nativefier
cglm                                     nats-streaming-server
cgrep                                    nave
chakra                                   ncdc
chamber                                  ncmpcpp
charm                                    nco
checkbashisms                            ndpi
checkstyle                               needle
chronograf                               neo4j
circleci                                 neovim
citus                                    netcdf
clang-format                             netdata
cloc                                     nethack
clojure                                  netpbm
cmake                                    newsboat
cmark-gfm                                nexus
cmocka                                   nghttp2
cockroach                                nginx
cocoapods                                nifi-registry
cogl                                     nim
cointop                                  nlopt
composer                                 nnn
conan                                    node
conserver                                node-build
consul                                   node@10
convox                                   node@8
coq                                      node_exporter
corsixth                                 nodenv
couchdb                                  nomad
cp2k                                     notmuch
cppad                                    nss
cpprestsdk                               ntl
cql                                      numpy
cracklib                                 nwchem
crc32c                                   nzbget
cromwell                                 ocrmypdf
crosstool-ng                             octave
crowdin                                  odpi
cryfs                                    ola
cryptol                                  ompl
crystal                                  oniguruma
crystal-icr                              opa
csound                                   open-mpi
cucumber-cpp                             openapi-generator
curl                                     openblas
curl-openssl                             opencascade
cython                                   opencc
dartsim                                  opencoarrays
dav1d                                    opencv
davix                                    opencv@3
dbhash                                   openimageio
dcd                                      openrct2
dcm2niix                                 openshift-cli
dep                                      openssl
dependency-check                         openssl@1.1
dfmt                                     openvdb
dhall                                    operator-sdk
dhall-json                               osc
diff-pdf                                 osm2pgrouting
diffoscope                               osmosis
digdag                                   ospray
dita-ot                                  osquery
django-completion                        osrm-backend
dmd                                      owfs
dnscontrol                               p11-kit
dnscrypt-proxy                           packer
dnstwist                                 packmol
docfx                                    paket
docker                                   pam-u2f
docker-completion                        pandoc
docker-credential-helper                 pandoc-crossref
docker-machine-driver-xhyve              paperkey
doctl                                    parallel
double-conversion                        parallelstl
dovecot                                  pari
druid                                    passenger
dscanner                                 patchelf
dub                                      payara
duck                                     pazpar2
dungeon                                  pcapplusplus
duo_unix                                 pcb
dwdiff                                   pcl
dynare                                   pdal
easyengine                               pdfgrep
eccodes                                  pdfpc
efl                                      pdftoipe
elasticsearch                            pdns
elasticsearch@5.6                        pdnsrec
elixir                                   percona-xtrabackup
embree                                   perl
emscripten                               peru
encfs                                    petsc
envconsul                                petsc-complex
epubcheck                                pgbadger
erlang                                   pgcli
erlang@19                                pgformatter
erlang@20                                pgplot
eslint                                   pgrouting
etcd                                     phoronix-test-suite
ethereum                                 php
etl                                      php-cs-fixer
evince                                   php@7.1
exiftool                                 php@7.2
exiv2                                    phpmyadmin
exploitdb                                phpstan
eye-d3                                   phpunit
faas-cli                                 physfs
fastme                                   picard-tools
faudio                                   picat
ffmpeg                                   pick
ffsend                                   pijul
fftw                                     pilosa
fibjs                                    pinfo
file-formula                             planck
fio                                      plantuml
firebase-cli                             platformio
flatbuffers                              plplot
flintrock                                plzip
flow                                     pmd
fluxctl                                  pngquant
fn                                       pod2man
fobis                                    ponyc
folly                                    poppler
fontforge                                postgresql
fonttools                                postgresql@10
fq                                       postgresql@9.4
freeling                                 postgresql@9.5
freeradius-server                        postgresql@9.6
freetds                                  pre-commit
frpc                                     presto
frps                                     prettier
frugal                                   privoxy
fselect                                  profanity
fuseki                                   proguard
futhark                                  proj
galen                                    prometheus
gandi.cli                                protoc-gen-go
gauge                                    prototool
gcc                                      pspg
gcc@5                                    psql2csv
gcc@6                                    pstoedit
gcc@7                                    pulumi
gcsfuse                                  pumba
gdal                                     pure-ftpd
gdb                                      purescript
gdcm                                     pushpin
gecode                                   py3cairo
geeqie                                   pybind11
gegl                                     pyenv
gel                                      pygobject
genact                                   pygobject3
gengetopt                                pypy
geoipupdate                              pyside
geos                                     qalculate-gtk
getdns                                   qbs
gexiv2                                   qca
ghc                                      qd
ghq                                      qemu
ghr                                      qpdf
gibo                                     qrupdate
gifsicle                                 qt
git                                      quantlib
git-cinnabar                             quazip
git-ftp                                  quicktype
git-lfs                                  quilt
git-quick-stats                          qwt
git-remote-hg                            r
git-review                               rabbitmq
git-secret                               radare2
git-town                                 rancid
gitfs                                    range-v3
gitg                                     raylib
gitlab-runner                            rbspy
gitleaks                                 rdesktop
gitless                                  re2
gjs                                      readline
glances                                  rebar3
glib                                     recoverjpeg
glib-networking                          redis
glooctl                                  redo
glslang                                  remind
gmic                                     reposurgeon
gmsh                                     reprepro
gmt                                      restic
gnu-units                                restview
gnumeric                                 rhino
gnunet                                   riemann
gnupg                                    riff
gnuplot                                  rke
gnuradio                                 roll
gnutls                                   rom-tools
go                                       root
godep                                    roswell
goffice                                  rsyslog
golang-migrate                           rt-audio
gollum                                   rtmidi
golo                                     ruby
gomplate                                 ruby-build
goofys                                   rust
google-authenticator-libpam              rustup-init
google-benchmark                         s-search
googler                                  salt
gopass                                   sassc
gor                                      saxon
goreleaser                               sbcl
gosu                                     scala
gpsbabel                                 scalapack
gradle                                   scalariform
grafana                                  scipy
grails                                   scmpuff
grakn                                    scons
graph-tool                               scrcpy
grib-api                                 sdb
groovy                                   sdcc
groovysdk                                sdl2_ttf
grpc                                     sec
grpcurl                                  serd
gssdp                                    serf
gst-editing-services                     serve
gst-libav                                serverless
gst-plugins-bad                          sfcgal
gst-plugins-base                         shadowsocks-libev
gst-plugins-good                         shc
gst-plugins-ugly                         shfmt
gst-python                               ship
gst-rtsp-server                          shogun
gst-validate                             shpotify
gstreamer                                shyaml
gtk-doc                                  sile
gtk-gnutella                             silk
gtksourceview3                           simple-scan
gtranslator                              sipsak
gupnp                                    siril
gx                                       sk
h3                                       skaffold
hana                                     skopeo
hapi-fhir-cli                            sleuthkit
harfbuzz                                 smali
hbase                                    smimesign
hdf5                                     sn0int
hdf5@1.8                                 socat
hebcal                                   solr
heimdal                                  solr@7.7
helmfile                                 sonobuoy
hexyl                                    sops
hfstospell                               source-highlight
highlight                                source-to-image
hivemind                                 sourcekitten
hledger                                  sourcery
hlint                                    spades
homebank                                 sparse
hopenpgp-tools                           sphinx-doc
howdoi                                   spin
htmlcxx                                  spirv-cross
http-parser                              sqlcipher
httpd                                    sqldiff
hugo                                     sqlite
hydra                                    sqlmap
hyperfine                                sratom
hypre                                    srt
i2p                                      sshtrix
i2pd                                     sslh
iamy                                     sslscan
ibex                                     sslsplit
icecream                                 stellar-core
icu4c                                    step
idnits                                   stk
igv                                      stout
imagemagick                              strongswan
imagemagick@6                            stunnel
imageoptim-cli                           subversion
imake                                    suite-sparse
imapsync                                 sundials
influxdb                                 superlu
iniparser                                supervisor
inlets                                   swagger-codegen
interactive-rebase-tool                  swagger-codegen@2
ios-sim                                  swi-prolog
iozone                                   swift-protobuf
ipbt                                     swiftformat
ipfs                                     swiftlint
ipython                                  swig
ircii                                    swimat
isl                                      sync_gateway
ispc                                     syncthing
istioctl                                 synfig
itstool                                  sysbench
ivykis                                   talloc
jailkit                                  tarantool
jbig2dec                                 taskell
jdnssec-tools                            tass64
jdupes                                   tbb
jena                                     tcpreplay
jenkins                                  tcsh
jenkins-job-builder                      tdlib
jenkins-lts                              tectonic
jfrog-cli-go                             telegraf
jhiccup                                  teleport
jhipster                                 terraform
jmxterm                                  terraforming
john                                     terragrunt
joplin                                   terrahub
jp2a                                     testssl
jruby                                    texmath
jsdoc3                                   tfenv
json-fortran                             thefuck
json_spirit                              tika
jsonnet                                  tile38
jsonschema2pojo                          tippecanoe
juju                                     tkdiff
jump                                     tmux
just                                     tmuxinator-completion
kafka                                    tokei
kahip                                    tomcat
khal                                     tomcat@7
khard                                    tomcat@8
kibana                                   tomee-plus
kitchen-sync                             tomee-webprofile
klavaro                                  topgrade
knot                                     tor
knot-resolver                            torsocks
kobalt                                   tox
kops                                     traefik
kore                                     trafficserver
kotlin                                   translate-shell
krb5                                     travis
kubecfg                                  treefrog
kubeless                                 trezor-agent
kubeprod                                 triton
kubernetes-cli                           ttyd
kubernetes-helm                          tundra
kubernetes-service-catalog-client        txr
kyoto-cabinet                            typescript
kyoto-tycoon                             u-boot-tools
landscaper                               ucloud
lapack                                   uhd
lasi                                     ultralist
laszip                                   uncrustify
latex2html                               ungit
latexml                                  unp64
lazygit                                  unrar
lbdb                                     upscaledb
lcdf-typetools                           urdfdom_headers
ledger                                   utf8proc
lego                                     util-linux
leveldb                                  v8
lf                                       vala
lgogdownloader                           varnish
libb2                                    vault
libbitcoin                               vault-cli
libbitcoin-blockchain                    vcdimager
libbitcoin-client                        vegeta
libbitcoin-database                      velero
libbitcoin-explorer                      verilator
libbitcoin-network                       vert.x
libbitcoin-node                          vim
libbitcoin-protocol                      vim@7.4
libbitcoin-server                        vips
libbluray                                visp
libcddb                                  volt
libcdio                                  vte3
libcdr                                   vtk
libchamplain                             vulkan-headers
libcoap                                  vultr
libdap                                   wabt
libdazzle                                wartremover
libdc1394                                watchexec
libebml                                  webdis
libedit                                  webpack
liberasurecode                           websocat
libestr                                  websocketd
libetonyek                               weechat
libev                                    wesnoth
libevent                                 wget
libfabric                                whois
libfixbuf                                widelands
libgaiagraphics                          wildfly-as
libgda                                   wimlib
libgeotiff                               wine
libgit2                                  wiredtiger
libgit2-glib                             wireguard-go
libgsf                                   wireguard-tools
libical                                  wiremock-standalone
libiconv                                 wireshark
libidn2                                  wp-cli
libimagequant                            wp-cli-completion
libjson-rpc-cpp                          wtf
libjwt                                   wxmaxima
liblas                                   wxpython
liblcf                                   xctool
liblinear                                xmake
libltc                                   xmrig
libmagic                                 xonsh
libmatroska                              xpdf
libmspub                                 xplanet
libmtp                                   xsimd
libmwaw                                  yaf
libnfs                                   yamllint
libnice                                  yara
libntlm                                  yarn
libodfgen                                yaz
libofx                                   yelp-tools
libomp                                   ykman
libopenmpt                               yle-dl
libosinfo                                you-get
libphonenumber                           youtube-dl
libpq                                    yq
libpqxx                                  yubico-piv-tool
libprotoident                            z3
libpsl                                   zebra
libpulsar                                zim
libqalculate                             zlog
librasterlite                            znc
librealsense                             zola
libressl                                 zorba
librsvg
==> Renamed Formulae
gnatsd -> nats-server
==> Deleted Formulae
compose2kube        js-test-driver      scala@2.10          whirr
erlang@18           minisat             swig@3.04           xmoto
gtk-engines         node@6              tomcat@6
gtk-murrine-engine  rlvm                typesafe-activator

Error: The following directories are not writable by your user:
/usr/local/lib/pkgconfig

You should change the ownership of these directories to your user.
  sudo chown -R $(whoami) /usr/local/lib/pkgconfig

And make sure that your user has write permission.
  chmod u+w /usr/local/lib/pkgconfig
JinnoMacBook-Pro:sample-web-server jinmizou$ curl --silent --request GET --url 'https://api.thecatapi.com/v1/images/search?limit=3' | jp
-bash: jp: command not found
(23) Failed writing body
JinnoMacBook-Pro:sample-web-server jinmizou$ curl --silent --request GET --url 'https://api.thecatapi.com/v1/images/search?limit=3' | jq
-bash: jq: command not found
(23) Failed writing body
JinnoMacBook-Pro:sample-web-server jinmizou$ curl --silent --request GET --url 'https://api.thecatapi.com/v1/images/search?limit=3' | jqsudo chown -R $(whoami) /usr/local/lib/pkgconfig
-bash: jqsudo: command not found
(23) Failed writing body
JinnoMacBook-Pro:sample-web-server jinmizou$ chmod u+w /usr/local/lib/pkgconfig
JinnoMacBook-Pro:sample-web-server jinmizou$ sudo chown -R $(whoami) /usr/local/lib/pkgconfig
Password:
JinnoMacBook-Pro:sample-web-server jinmizou$ brew install jq
==> Installing dependencies for jq: oniguruma
==> Installing jq dependency: oniguruma
==> Downloading https://homebrew.bintray.com/bottles/oniguruma-6.9.2.mojave.bott
==> Downloading from https://akamai.bintray.com/c6/c613befafe81da48913ebd1a7eb03
######################################################################## 100.0%
==> Pouring oniguruma-6.9.2.mojave.bottle.tar.gz
🍺  /usr/local/Cellar/oniguruma/6.9.2: 17 files, 1.3MB
==> Installing jq
==> Downloading https://homebrew.bintray.com/bottles/jq-1.6.mojave.bottle.1.tar.
==> Downloading from https://akamai.bintray.com/71/71f0e76c5b22e5088426c971d5e79
######################################################################## 100.0%
==> Pouring jq-1.6.mojave.bottle.1.tar.gz
🍺  /usr/local/Cellar/jq/1.6: 18 files, 1MB
==> `brew cleanup` has not been run in 30 days, running now...
JinnoMacBook-Pro:sample-web-server jinmizou$ curl --silent --request GET --url 'https://api.thecatapi.com/v1/images/search?limit=3' | jq
[
  {
    "breeds": [],
    "id": "25c",
    "url": "https://cdn2.thecatapi.com/images/25c.jpg",
    "width": 720,
    "height": 480
  },
  {
    "breeds": [],
    "id": "a6l",
    "url": "https://cdn2.thecatapi.com/images/a6l.jpg",
    "width": 450,
    "height": 301
  },
  {
    "breeds": [],
    "id": "alk",
    "url": "https://cdn2.thecatapi.com/images/alk.jpg",
    "width": 480,
    "height": 320
  }
]
JinnoMacBook-Pro:sample-web-server jinmizou$ curl --silent --request GET --url 'https://api.thecatapi.com/v1/images/search?limit=3' > thecat.json
JinnoMacBook-Pro:sample-web-server jinmizou$ cat ~/.bash_profile
cat: /Users/jinmizou/.bash_profile: No such file or directory
JinnoMacBook-Pro:sample-web-server jinmizou$ cat ~/.bash_profile
cat: /Users/jinmizou/.bash_profile: No such file or directory
JinnoMacBook-Pro:sample-web-server jinmizou$ echo "if [ -f ~/.bashrc ]; then" >> ~/.bash_profile
JinnoMacBook-Pro:sample-web-server jinmizou$ echo "  . ~/.bashrc" >> ~/.bash_profile
JinnoMacBook-Pro:sample-web-server jinmizou$ echo "fi" >> ~/.bash_profile
JinnoMacBook-Pro:sample-web-server jinmizou$ cat ~/.bash_profile
if [ -f ~/.bashrc ]; then
  . ~/.bashrc
fi
JinnoMacBook-Pro:sample-web-server jinmizou$ cul -L git.io/nodebrew | perl - setup
-bash: cul: command not found
JinnoMacBook-Pro:sample-web-server jinmizou$ curl -L git.io/nodebrew | perl - setup
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0     0    0     0    0     0      0      0 --:--:--  0:00:01 --:--:--     0
  0     0    0     0    0     0      0      0 --:--:--  0:00:02 --:--:--     0
100 24634  100 24634    0     0   9552      0  0:00:02  0:00:02 --:--:-- 58374
Fetching nodebrew...
Installed nodebrew in $HOME/.nodebrew

========================================
Export a path to nodebrew:

export PATH=$HOME/.nodebrew/current/bin:$PATH
========================================
JinnoMacBook-Pro:sample-web-server jinmizou$ export PATH=$HOME/.nodebrew/current/bin:$PATH >> ~/.bashrc
JinnoMacBook-Pro:sample-web-server jinmizou$ source ~/.bashrc
JinnoMacBook-Pro:sample-web-server jinmizou$ nodebrew
nodebrew 1.0.1

Usage:
    nodebrew help                         Show this message
    nodebrew install <version>            Download and install <version> (from binary)
    nodebrew compile <version>            Download and install <version> (from source)
    nodebrew install-binary <version>     Alias of `install` (For backward compatibility)
    nodebrew uninstall <version>          Uninstall <version>
    nodebrew use <version>                Use <version>
    nodebrew list                         List installed versions
    nodebrew ls                           Alias for `list`
    nodebrew ls-remote                    List remote versions
    nodebrew ls-all                       List remote and installed versions
    nodebrew alias <key> <value>          Set alias
    nodebrew unalias <key>                Remove alias
    nodebrew clean <version> | all        Remove source file
    nodebrew selfupdate                   Update nodebrew
    nodebrew migrate-package <version>    Install global NPM packages contained in <version> to current version
    nodebrew exec <version> -- <command>  Execute <command> using specified <version>

Example:
    # install
    nodebrew install v8.9.4

    # use a specific version number
    nodebrew use v8.9.4
JinnoMacBook-Pro:sample-web-server jinmizou$ vi .bash_profile
JinnoMacBook-Pro:sample-web-server jinmizou$ nodebrew install-binary latest
Fetching: https://nodejs.org/dist/v12.4.0/node-v12.4.0-darwin-x64.tar.gz
######################################################################## 100.0%
Installed successfully
JinnoMacBook-Pro:sample-web-server jinmizou$ nodebrew ls
v12.4.0

current: none
JinnoMacBook-Pro:sample-web-server jinmizou$ nodebrew use latest
use v12.4.0
JinnoMacBook-Pro:sample-web-server jinmizou$  node -v
v12.4.0
JinnoMacBook-Pro:sample-web-server jinmizou$ 

```
