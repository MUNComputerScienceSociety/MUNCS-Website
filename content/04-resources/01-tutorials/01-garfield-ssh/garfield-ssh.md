Title: SSH with Garfield

----

Text: 

# SSH with Garfield

Having remote access to your LABnet account is one of the most useful tools available to MUN Computer Science students. Remote access will allow you, at any time, to submit assignments, access your files, and access the various tools that LABnet provides from any location that has an internet connection.

## Linux/OS X

Open up a Terminal window and issue the following command (replace `abc123` with your LABnet username):

```
ssh abc123@garfield.cs.mun.ca
```

You will be asked to accept a certificate and to supply your password. You should then be in your home directory where you can do anything you are able to do when using the LABnet machines on campus (except run graphical applications). To enable X11 forwarding over SSH:

```
ssh -Y abc123@garfield.cs.mun.ca
```

X11 forwarding allows you to forward a graphical application through SSH, which is useful for testing graphical Java applications (e.g. Swing).

## Copying files over SSH

Open up a Terminal window and use the following command syntax:

```
scp {-r} {source} {destination}
```

For example, to copy my `cs3710` directory from LABnet to my local machine:

```
scp -r abc123@garfield.cs.mun.ca:~/cs3710/ ~/Documents/
```

And the reverse:

```
scp -r ~/Documents/cs3710/ abc123@garfield.cs.mun.ca:~/
```

The -r flag recursively copies all files in a directory; if you are only copying a single file you do not need to include it.

### Public key authentication (SSH keys)

Garfield has supports for public key authentication, but it requires a few steps.

For users running Linux or Mac OS X, the following commands will setup your keys as two files in your home directory under `.ssh/`. **One is `mun`, which is your private key. You should protect this as you would any key. The other file is `mun.pub`, which is the public key. This is file you distribute.** 

```
ssh-keygen -N ’’ -b 4096 -t rsa -f ~/.ssh/mun -C "your_email@mun.ca"
chmod 700 ~/.ssh && chmod 600 ~/.ssh/*
```

You must now upload your public key to your home directory on LABnet. You could use a flash drive or any other physical media to transfer the public key into your home folder on Garfield. An alternate method is to use `scp`. Issue the following command from the terminal:

```
cat ~/.ssh/mun.pub | ssh abc123@garfield.cs.mun.ca 'cat - >> ~/.ssh/authorized_keys'
```

If everything was setup correctly you should be able to connect to Garfield using a public key. To test the setup, run:

```
ssh -v abc123@garfield.cs.mun.ca -i ~/.ssh/mun
```

And look for the following output:

```
debug1: Next authentication method: publickey
debug1: Offering public key: ~/.ssh/id_rsa
debug1: Authentication succeeded (publickey).
```

The `-v` flag generates verbose output by ssh.

To avoid having to enter your username and specifying your key, you can set your SSH config to automatically to use your username and key for any computer at MUN. Also, it is recommended you keep a persistent connection and enable multiplexing to avoid wasting time to re-open a connection. Use the following settings in your local `~/.ssh/config` and run ```mkdir -p ~/.ssh/sockets/``` (which will hold all the sockets). 

```
Host *
ControlMaster auto
ControlPath ~/.ssh/sockets/%r@%h-%p
ControlPersist 8760h
ServerAliveInterval 5
ServerAliveCountMax 1
TCPKeepAlive yes

Host *.mun.ca
User [abc123]
IdentityFile ~/.ssh/mun
```

To test this, simply run:

```
ssh garfield.cs.mun.ca 
```

If you are not prompted for your password and you are able to log in, then you have correctly set it up.
