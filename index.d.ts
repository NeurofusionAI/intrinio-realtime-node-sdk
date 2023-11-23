export = IntrinioRealtime;
declare class IntrinioRealtime {
    constructor(accessKey: any, onTrade: any, onQuote: any, config?: {});
    _accessKey: any;
    _config: any;
    _token: string;
    _websocket: any;
    _isReady: boolean;
    _stopped: boolean;
    _attemptingReconnect: boolean;
    _lastReset: number;
    _msgCount: number;
    _channels: any;
    _heartbeat: number;
    _onTrade: any;
    _onQuote: any;
    _onEvent: any;
    _float32Array: Float32Array;
    _backingByteArray: Uint8Array;
    _getAuthUrl(): string;
    _getWebSocketUrl(): string;
    _parseTrade(bytes: any, symbolLength: any): {
        Symbol: string;
        Price: number;
        Size: any;
        Timestamp: any;
        TotalVolume: any;
    };
    _parseQuote(bytes: any, symbolLength: any): {
        Type: any;
        Symbol: string;
        Price: number;
        Size: any;
        Timestamp: any;
    };
    _parseSocketMessage(data: any): void;
    _trySetToken(): any;
    _makeJoinMessage(tradesOnly: any, symbol: any): Uint8Array;
    _makeLeaveMessage(symbol: any): Uint8Array;
    _resetWebsocket(): any;
    _isReconnecting: boolean;
    _join(symbol: any, tradesOnly: any): void;
    _leave(symbol: any): void;
    join(symbols: any, tradesOnly: any): Promise<void>;
    leave(symbols: any, ...args: any[]): void;
    stop(): Promise<void>;
    getTotalMsgCount(): number;
}
