import useWebChatAPIContext from './internal/useWebChatAPIContext';

/**
 * Manages the upload button ref so the value can be cleared from SendBoxComposer
 */
export default function useUploadButtonRef(): [
  {
    uploadButtonRef?: React.RefObject<HTMLInputElement>;
    setUploadButtonRef: (current: HTMLInputElement) => void;
  }
] {
  const { uploadButtonRef, setUploadButtonRef } = useWebChatAPIContext();

  return [{ uploadButtonRef, setUploadButtonRef }];
}
