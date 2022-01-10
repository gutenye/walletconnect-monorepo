import * as windowGetters from "@exodus/walletconnect-window-getters";
import {
  detect,
  BrowserInfo,
  BotInfo,
  NodeInfo,
  SearchBotDeviceInfo,
  ReactNativeInfo,
} from "detect-browser";

export function detectEnv(
  userAgent?: string,
): BrowserInfo | BotInfo | NodeInfo | SearchBotDeviceInfo | ReactNativeInfo | null {
  return detect(userAgent);
}

export function isNode(): boolean {
  const env = detectEnv();
  const result = env && env.name ? env.name.toLowerCase() === "node" : false;
  return result;
}

export function isBrowser(): boolean {
  const result = !isNode() && !!getNavigator();
  return result;
}

export const getNavigator = windowGetters.getNavigator;

export const getLocation = windowGetters.getLocation;
