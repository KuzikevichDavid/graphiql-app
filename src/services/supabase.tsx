import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ooghpaybgfgdphyyyvjz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vZ2hwYXliZ2ZnZHBoeXl5dmp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3MjM0NjIsImV4cCI6MjAxODI5OTQ2Mn0.k0hdq9mprmRVASjhiy3nFbXYwwf-DQEov61JzLYerKQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
