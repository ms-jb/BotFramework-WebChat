import { DirectLineAttachment } from 'botframework-webchat-core';
import useWebChatAPIContext from './internal/useWebChatAPIContext';
import { useState } from 'react';

export default function useFiles() {
  const { files, setFiles } = useWebChatAPIContext();

  // const [files, setFiles] = useState<FileList[]>([]);

  return [{ files, setFiles }];
}
