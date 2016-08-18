function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, ".i2p")) {
    return "PROXY 127.0.0.1:4444"; // i2p proxy
  } else {
    if ((host == "localhost") ||
      (host == "127.0.0.1") ||
      (shExpMatch(host, "192.168.*")) ||
      (isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0"))) {
      return "DIRECT";
    } else {
      return "SOCKS5 127.0.0.1:9050;"; // tor proxy
    }
  }
}
