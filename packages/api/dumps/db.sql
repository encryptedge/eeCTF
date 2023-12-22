SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;

CREATE TABLE public.bans (
    id text NOT NULL,
    user_id text NOT NULL,
    ip text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.bans IS 'Bans issued to users';
CREATE TABLE public.challenges (
    id text NOT NULL,
    machine_id text NOT NULL,
    name text NOT NULL,
    stage integer NOT NULL,
    description text NOT NULL,
    flag text NOT NULL,
    point integer NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.challenges IS 'Challenges Data';
CREATE TABLE public.machines (
    id text NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    created_by text NOT NULL,
    tags text NOT NULL,
    no_of_solves integer DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.machines IS 'Machines Data';
CREATE TABLE public.scores (
    id text NOT NULL,
    submission_id text NOT NULL,
    challenge_id text NOT NULL,
    team_id text NOT NULL,
    user_id text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.scores IS 'Scoreboard Data';
CREATE TABLE public.submissions (
    id text NOT NULL,
    user_id text NOT NULL,
    submited_flag text NOT NULL,
    challenge_id text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.submissions IS 'User flag submissions';
CREATE TABLE public.teams (
    id text NOT NULL,
    name text NOT NULL,
    join_code text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.teams IS 'Teams Data';
CREATE TABLE public.users (
    id text NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    email_verification_code text NOT NULL,
    hash text NOT NULL,
    salt text NOT NULL,
    team_id text,
    is_admin boolean DEFAULT false NOT NULL,
    is_email_verified boolean DEFAULT false NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);
COMMENT ON TABLE public.users IS 'Users Data';
ALTER TABLE ONLY public.bans
    ADD CONSTRAINT bans_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.challenges
    ADD CONSTRAINT challenges_flag_key UNIQUE (flag);
ALTER TABLE ONLY public.challenges
    ADD CONSTRAINT challenges_name_key UNIQUE (name);
ALTER TABLE ONLY public.challenges
    ADD CONSTRAINT challenges_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.machines
    ADD CONSTRAINT machines_name_key UNIQUE (name);
ALTER TABLE ONLY public.machines
    ADD CONSTRAINT machines_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_submission_id_key UNIQUE (submission_id);
ALTER TABLE ONLY public.submissions
    ADD CONSTRAINT submissions_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_name_key UNIQUE (name);
ALTER TABLE ONLY public.teams
    ADD CONSTRAINT teams_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_hash_key UNIQUE (hash);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_salt_key UNIQUE (salt);
CREATE TRIGGER set_public_bans_updated_at BEFORE UPDATE ON public.bans FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_bans_updated_at ON public.bans IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_challenges_updated_at BEFORE UPDATE ON public.challenges FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_challenges_updated_at ON public.challenges IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_machines_updated_at BEFORE UPDATE ON public.machines FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_machines_updated_at ON public.machines IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_scores_updated_at BEFORE UPDATE ON public.scores FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_scores_updated_at ON public.scores IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_submissions_updated_at BEFORE UPDATE ON public.submissions FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_submissions_updated_at ON public.submissions IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_teams_updated_at BEFORE UPDATE ON public.teams FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_teams_updated_at ON public.teams IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_users_updated_at ON public.users IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.bans
    ADD CONSTRAINT bans_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.challenges
    ADD CONSTRAINT challenges_machine_id_fkey FOREIGN KEY (machine_id) REFERENCES public.machines(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_challenge_id_fkey FOREIGN KEY (challenge_id) REFERENCES public.challenges(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_submission_id_fkey FOREIGN KEY (submission_id) REFERENCES public.submissions(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_team_id_fkey FOREIGN KEY (team_id) REFERENCES public.teams(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.scores
    ADD CONSTRAINT scores_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.submissions
    ADD CONSTRAINT submissions_challenge_id_fkey FOREIGN KEY (challenge_id) REFERENCES public.challenges(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.submissions
    ADD CONSTRAINT submissions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_team_id_fkey FOREIGN KEY (team_id) REFERENCES public.teams(id) ON UPDATE CASCADE ON DELETE CASCADE;
