// Queen Riam - Settings
// All values are read from environment variables.
// Copy .env.example to .env and fill in your details,
// OR set them as environment variables on your hosting platform.

require('dotenv').config({ override: true });

const settings = {
  // ── Bot Identity ─────────────────────────────────────────────────────────
  botName:     process.env.BOT_NAME     || 'hacker MD rahat',
  botOwner:    process.env.BOT_OWNER    || '𝙍𝘼𝙃𝘼𝙏 𝙞𝙨𝙡𝙖𝙢',
  packname:    process.env.PACK_NAME    || 'hacker MD rahat',
  author:      process.env.PACK_AUTHOR  || '𝙍𝘼𝙃𝘼𝙏 𝙞𝙨𝙡𝙖𝙢',
  description: 'This is a bot for managing group commands and automating tasks.',
  version:     '1.0.0',

  // ── Owner & Session ──────────────────────────────────────────────────────
  // ownerNumber: your WhatsApp number with country code, no + or spaces
  // SESSION_ID:  set on your platform — format is RIAM~<base64> or Queen~<megaId>
  ownerNumber: (process.env.OWNER_NUMBER || '8801751442689').replace(/[^0-9]/g, ''),

  // ── Behaviour ────────────────────────────────────────────────────────────
  prefix:      process.env.PREFIX       || '.',
  timezone:    process.env.TIMEZONE     || 'Africa/Accra',
  commandMode: process.env.COMMAND_MODE || 'public',   // 'public' or 'private'

  // ── Auto Features ────────────────────────────────────────────────────────
  AUTO_STATUS_REACT:  process.env.AUTO_STATUS_REACT  || 'false',
  AUTO_STATUS_REPLY:  process.env.AUTO_STATUS_REPLY  || 'false',
  AUTO_STATUS_MSG:    process.env.AUTO_STATUS_MSG     || 'Status Viewed hacker MD rahat',
  AUTOREAD:           process.env.AUTOREAD            || 'false',
  AUTOTYPE:           process.env.AUTOTYPE            || 'false',
  AUTORECORD:         process.env.AUTORECORD          || 'false',
  AUTORECORDTYPE:     process.env.AUTORECORDTYPE      || 'false',

  // ── API Keys ─────────────────────────────────────────────────────────────
  giphyApiKey: process.env.GIPHY_API_KEY || '',
};

module.exports = settings;
