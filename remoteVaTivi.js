function remote(volume, channel,status ) {
    this.volume = volume;
    this.channel = channel;
    this.status = status;

    this.setChannelRemote = function (channelSet) {
        if(this.status == true) {
            this.channel = channelSet;
        }
    };

    this.setVolumeRemote = function (volumeSet) {
        if(this.status == true) {
            this.volume = volumeSet;
        }
    }

    this.changeStatusRemote = function () {
        this.status = !this.status;
    }
}

function tivi(remote) {
    this.volume = remote.volume;
    this.channel = remote.channel;


    this.tiviStatus = function (remote) {
        if(remote.status == true) {
            document.write("Tivi da duoc bat" + "</br>")
        } else {
            document.write("Tivi da duoc tat"+ "</br>")
        }
    }

    this.setTivi = function (Remote) {
        this.volume = Remote.volume;
        this.channel = Remote.channel;
    }

    this.displayChannel = function () {
        document.write("Tivi dang o channel " + this.channel+ "</br>")
    }

    this.displayVolume = function () {
        document.write("Tivi dang o volume " + this.volume+ "</br>")
    }

}
let Remote = new remote(6,5,false)
let Tivi = new tivi(Remote);

Remote.changeStatusRemote();

Tivi.tiviStatus(Remote);

Remote.setChannelRemote(7);

Tivi.setTivi(Remote);

Tivi.displayChannel();

Remote.setChannelRemote(3);

Tivi.setTivi(Remote);
Tivi.displayChannel();

Remote.setVolumeRemote(Remote.volume + 2);

Tivi.setTivi(Remote);

Tivi.displayVolume();