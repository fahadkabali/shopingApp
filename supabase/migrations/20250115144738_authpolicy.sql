create policy "Update Auth Users"
on "public"."users"
as permissive
for update
to authenticated
using (true)
with check (true);



