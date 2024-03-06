import clearSuggestedActions from './actions/clearSuggestedActions';
import connect from './actions/connect';
import disconnect from './actions/disconnect';
import dismissNotification from './actions/dismissNotification';
import emitTypingIndicator from './actions/emitTypingIndicator';
import markActivity from './actions/markActivity';
import postActivity from './actions/postActivity';
import sendEvent from './actions/sendEvent';
import sendFiles from './actions/sendFiles';
import sendMessage from './actions/sendMessage';
import sendMessageBack from './actions/sendMessageBack';
import sendPostBack from './actions/sendPostBack';
import setDictateInterims from './actions/setDictateInterims';
import setDictateState from './actions/setDictateState';
import setLanguage from './actions/setLanguage';
import setNotification from './actions/setNotification';
import setSendBox from './actions/setSendBox';
import setSendTimeout from './actions/setSendTimeout';
import setSendTypingIndicator from './actions/setSendTypingIndicator';
import startDictate from './actions/startDictate';
import startSpeakingActivity from './actions/startSpeakingActivity';
import stopDictate from './actions/stopDictate';
import stopSpeakingActivity from './actions/stopSpeakingActivity';
import submitSendBox from './actions/submitSendBox';
import * as ActivityClientState from './constants/ActivityClientState';
import * as DictateState from './constants/DictateState';
import createStore, {
  withDevTools as createStoreWithDevTools,
  withOptions as createStoreWithOptions
} from './createStore';
import OneOrMany from './types/OneOrMany';
import {
  isThing as isOrgSchemaThing,
  isThingAsEntity as isOrgSchemaThingAsEntity,
  isThingOf as isOrgSchemaThingOf
} from './types/external/OrgSchema/Thing';
import { parseAction } from './types/external/OrgSchema2/Action';
import { parseClaim } from './types/external/OrgSchema2/Claim';
import { parseCreativeWork } from './types/external/OrgSchema2/CreativeWork';
import { parseDefinedTerm } from './types/external/OrgSchema2/DefinedTerm';
import { parseProject } from './types/external/OrgSchema2/Project';
import { parseThing } from './types/external/OrgSchema2/Thing';
import getOrgSchemaMessage from './utils/getOrgSchemaMessage';
import isForbiddenPropertyName from './utils/isForbiddenPropertyName';
import onErrorResumeNext from './utils/onErrorResumeNext';
import singleToArray from './utils/singleToArray';
import warnOnce from './utils/warnOnce';

import type { GlobalScopePonyfill } from './types/GlobalScopePonyfill';
import type { WebChatActivity } from './types/WebChatActivity';
import type { DirectLineActivity } from './types/external/DirectLineActivity';
import type { DirectLineAnimationCard } from './types/external/DirectLineAnimationCard';
import type { DirectLineAttachment } from './types/external/DirectLineAttachment';
import type { DirectLineAudioCard } from './types/external/DirectLineAudioCard';
import type { DirectLineCardAction } from './types/external/DirectLineCardAction';
import type { DirectLineHeroCard } from './types/external/DirectLineHeroCard';
import type { DirectLineJSBotConnection } from './types/external/DirectLineJSBotConnection';
import type { DirectLineOAuthCard } from './types/external/DirectLineOAuthCard';
import type { DirectLineReceiptCard } from './types/external/DirectLineReceiptCard';
import type { DirectLineSignInCard } from './types/external/DirectLineSignInCard';
import type { DirectLineSuggestedAction } from './types/external/DirectLineSuggestedAction';
import type { DirectLineThumbnailCard } from './types/external/DirectLineThumbnailCard';
import type { DirectLineVideoCard } from './types/external/DirectLineVideoCard';
import type { Observable } from './types/external/Observable';
import type { Certification as OrgSchemaCertification } from './types/external/OrgSchema/Certification';
import type { Claim as OrgSchemaClaim } from './types/external/OrgSchema/Claim';
import type { Project as OrgSchemaProject } from './types/external/OrgSchema/Project';
import type { ReplyAction as OrgSchemaReplyAction } from './types/external/OrgSchema/ReplyAction';
import type { AsEntity as OrgSchemaAsEntity, Thing as OrgSchemaThing } from './types/external/OrgSchema/Thing';
import type { VoteAction as OrgSchemaVoteAction } from './types/external/OrgSchema/VoteAction';
import type { Action as OrgSchemaAction2 } from './types/external/OrgSchema2/Action';
import type { Claim as OrgSchemaClaim2 } from './types/external/OrgSchema2/Claim';
import type { CreativeWork as OrgSchemaCreativeWork2 } from './types/external/OrgSchema2/CreativeWork';
import type { DefinedTerm as OrgSchemaDefinedTerm2 } from './types/external/OrgSchema2/DefinedTerm';
import type { Project as OrgSchemaProject2 } from './types/external/OrgSchema2/Project';
import type { Thing as OrgSchemaThing2 } from './types/external/OrgSchema2/Thing';

const Constants = { ActivityClientState, DictateState };
const version = process.env.npm_package_version;

export {
  Constants,
  clearSuggestedActions,
  connect,
  createStore,
  createStoreWithDevTools,
  createStoreWithOptions,
  disconnect,
  dismissNotification,
  emitTypingIndicator,
  getOrgSchemaMessage,
  isForbiddenPropertyName,
  isOrgSchemaThing,
  isOrgSchemaThingAsEntity,
  isOrgSchemaThingOf,
  markActivity,
  onErrorResumeNext,
  parseAction,
  parseClaim,
  parseCreativeWork,
  parseDefinedTerm,
  parseProject,
  parseThing,
  postActivity,
  sendEvent,
  sendFiles,
  sendMessage,
  sendMessageBack,
  sendPostBack,
  setDictateInterims,
  setDictateState,
  setLanguage,
  setNotification,
  setSendBox,
  setSendTimeout,
  setSendTypingIndicator,
  singleToArray,
  startDictate,
  startSpeakingActivity,
  stopDictate,
  stopSpeakingActivity,
  submitSendBox,
  version,
  warnOnce
};

export type {
  DirectLineActivity,
  DirectLineAnimationCard,
  DirectLineAttachment,
  DirectLineAudioCard,
  DirectLineCardAction,
  DirectLineHeroCard,
  DirectLineJSBotConnection,
  DirectLineOAuthCard,
  DirectLineReceiptCard,
  DirectLineSignInCard,
  DirectLineSuggestedAction,
  DirectLineThumbnailCard,
  DirectLineVideoCard,
  GlobalScopePonyfill,
  Observable,
  OneOrMany,
  OrgSchemaAction2,
  OrgSchemaAsEntity,
  OrgSchemaCertification,
  OrgSchemaClaim,
  OrgSchemaClaim2,
  OrgSchemaCreativeWork2,
  OrgSchemaDefinedTerm2,
  OrgSchemaProject,
  OrgSchemaProject2,
  OrgSchemaReplyAction,
  OrgSchemaThing,
  OrgSchemaThing2,
  OrgSchemaVoteAction,
  WebChatActivity
};
