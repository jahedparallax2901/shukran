// let MODE = 'Local';
let MODE = 'Staging';
// let MODE = 'Live';

let base_api_url = null;
let merchant_panel = null;
let site_url = null;
if (MODE === 'Local') {
  base_api_url = process.env.REACT_APP_BASE_API_URL_LOCAL;
  merchant_panel = process.env.REACT_APP_MERCHANT_PANEL_LOCAL;
  site_url = process.env.REACT_APP_MERCHANT_PANEL_LOCAL;

} else if (MODE === 'Staging') {
  base_api_url = process.env.REACT_APP_BASE_API_URL_LOCAL;
  merchant_panel = process.env.REACT_APP_MERCHANT_PANEL_LOCAL;
  site_url = process.env.REACT_APP_MERCHANT_PANEL_LOCAL
} else if (MODE === 'Live') {
  base_api_url = process.env.REACT_APP_BASE_API_URL_LOCAL;
  merchant_panel = process.env.REACT_APP_MERCHANT_PANEL_LOCAL;
  site_url = process.env.REACT_APP_MERCHANT_PANEL_LOCAL;
} else {
  // api_base_url = process.env.REACT_APP_API_BASE_URL_DEVELOPMENT;
  base_api_url = process.env.REACT_APP_BASE_API_URL_LOCAL;
  merchant_panel = process.env.REACT_APP_MERCHANT_PANEL_LOCAL;
  site_url = process.env.REACT_APP_MERCHANT_PANEL_LOCAL;
}
export const BASE_API_URL = `${base_api_url}`;
export const MERCHANT_PANEL = `${merchant_panel}`;
export const SITE_URL = `${site_url}`;