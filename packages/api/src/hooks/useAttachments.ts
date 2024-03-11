import useWebChatAPIContext from './internal/useWebChatAPIContext';

export default function useAttachments() {
  return [useWebChatAPIContext().attachments, useWebChatAPIContext().setAttachments];
}
