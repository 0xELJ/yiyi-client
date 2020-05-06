export enum ActionTypes {
    AUTH_USERNAME_CHANGED = 'AUTH_USERNAME_CHANGED',
    AUTH_ROOM_CHANGED = 'AUTH_ROOM_CHANGED',
    AUTH_JOIN_ROOM_PENDING = 'SOCKET_JOIN_ROOM_PENDING',
    AUTH_JOIN_ROOM_SUCCESS = 'SOCKET_JOIN_ROOM_SUCCESS',
    AUTH_JOIN_ROOM_ERROR = 'SOCKET_JOIN_ROOM_SUCCESS',
    CHAT_MESSAGE_CHANGED = 'CHAT_MESSAGE_CHANGED',
    SOCKET_CONNECT_PENDING = 'SOCKET_CONNECT_PENDING',
    SOCKET_CONNECT_SUCCESS = 'SOCKET_CONNECT_SUCCESS',
    SOCKET_CONNECT_ERROR = 'SOCKET_CONNECT_ERROR',
    SOCKET_DISCONNECT_PENDING = 'SOCKET_DISCONNECT_PENDING',
    SOCKET_DISCONNECT_SUCCESS = 'SOCKET_DISCONNECT_SUCCESS',
    SOCKET_DISCONNECT_ERROR = 'SOCKET_DISCONNECT_ERROR',
    SOCKET_LEAVE_ROOM_PENDING = 'SOCKET_LEAVE_ROOM_PENDING',
    SOCKET_LEAVE_ROOM_SUCCESS = 'SOCKET_LEAVE_ROOM_SUCCESS',
    SOCKET_LEAVE_ROOM_ERROR = 'SOCKET_LEAVE_ROOM_ERROR',
    SOCKET_SEND_MESSAGE_PENDING = 'SOCKET_SEND_MESSAGE_PENDING',
    SOCKET_SEND_MESSAGE_SUCCESS = 'SOCKET_SEND_MESSAGE_SUCCESS',
    SOCKET_SEND_MESSAGE_ERROR = 'SOCKET_SEND_MESSAGE_ERROR',
    SOCKET_NEW_MESSAGE = 'SOCKET_NEW_MESSAGE',
    SOCKET_ROOM_DATA = 'SOCKET_ROOM_DATA',
    MODAL_SHOW = 'MODAL_SHOW',
    MODAL_CLOSE = 'MODAL_CLOSE'
}
