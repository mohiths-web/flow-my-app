import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.b34ea3f303674fada0e4d0b049f7cfcc',
  appName: 'AIONOS DIAGNOSTICS',
  webDir: 'dist',
  server: {
    url: 'https://b34ea3f3-0367-4fad-a0e4-d0b049f7cfcc.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#C3D4E0',
      showSpinner: false
    }
  }
};

export default config;