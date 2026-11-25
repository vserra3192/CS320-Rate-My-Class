# Supabase roles

Run `migrations/20261124000000_create_profiles_with_roles.sql` in the Supabase
SQL Editor for this project. The migration expects the existing professor
allowlist table to be `public."Class"` with an `email` column.

After the migration is applied, an Auth signup automatically creates a row in
`public.profiles`. `profiles.role` is `professor` when the signup email matches
`Class.email` (case-insensitive), and `student` otherwise. Signed-in users can
read their own profile row, including `role`; clients cannot write profile
rows or change their role.
