type LogContext = Record<string, string | number | boolean | null | undefined>;

type LogLevel = "info" | "warn" | "error";

const redactedKeys = ["password", "token", "secret", "authorization", "cookie", "apiKey"];

export function sanitizeLogContext(context: LogContext = {}): LogContext {
  return Object.fromEntries(
    Object.entries(context).map(([key, value]) => [
      key,
      redactedKeys.some((sensitiveKey) => key.toLowerCase().includes(sensitiveKey))
        ? "[REDACTED]"
        : value,
    ]),
  );
}

function writeLog(level: LogLevel, message: string, context?: LogContext) {
  const payload = {
    level,
    message,
    context: sanitizeLogContext(context),
    timestamp: new Date().toISOString(),
  };

  if (level === "error") {
    console.error(JSON.stringify(payload));
    return;
  }

  if (level === "warn") {
    console.warn(JSON.stringify(payload));
    return;
  }

  console.info(JSON.stringify(payload));
}

export const logger = {
  info(message: string, context?: LogContext) {
    writeLog("info", message, context);
  },
  warn(message: string, context?: LogContext) {
    writeLog("warn", message, context);
  },
  error(message: string, context?: LogContext) {
    writeLog("error", message, context);
  },
};
