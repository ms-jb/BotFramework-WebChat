import { DirectLineAttachment } from 'botframework-webchat-core';
import useWebChatAPIContext from './internal/useWebChatAPIContext';

export default function useAttachments(): [
  { attachments: DirectLineAttachment[]; setAttachments: (attachments: DirectLineAttachment[]) => void }
] {
  const { attachments, setAttachments } = useWebChatAPIContext();
  return [{ attachments, setAttachments }];
}
