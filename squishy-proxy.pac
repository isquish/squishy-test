function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, ".i2p")) {
    return "PROXY localhost:4444"; // i2p proxy
  } else {
    if ((host == "localhost") ||
      (host == "127.0.0.1") ||
      (shExpMatch(host, "192.168.*") ||
      (shExpMatch(host, "10.*")) {
      return "DIRECT";
    } else {
      return "SOCKS5 localhost:9090;"; // SquishynetHQ proxy
    }
  }
}
