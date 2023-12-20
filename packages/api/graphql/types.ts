export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Bans issued to users */
export type Bans = {
  __typename?: 'bans';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  ip: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "bans" */
export type Bans_Aggregate = {
  __typename?: 'bans_aggregate';
  aggregate?: Maybe<Bans_Aggregate_Fields>;
  nodes: Array<Bans>;
};

export type Bans_Aggregate_Bool_Exp = {
  count?: InputMaybe<Bans_Aggregate_Bool_Exp_Count>;
};

export type Bans_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Bans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Bans_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "bans" */
export type Bans_Aggregate_Fields = {
  __typename?: 'bans_aggregate_fields';
  avg?: Maybe<Bans_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Bans_Max_Fields>;
  min?: Maybe<Bans_Min_Fields>;
  stddev?: Maybe<Bans_Stddev_Fields>;
  stddev_pop?: Maybe<Bans_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bans_Stddev_Samp_Fields>;
  sum?: Maybe<Bans_Sum_Fields>;
  var_pop?: Maybe<Bans_Var_Pop_Fields>;
  var_samp?: Maybe<Bans_Var_Samp_Fields>;
  variance?: Maybe<Bans_Variance_Fields>;
};


/** aggregate fields of "bans" */
export type Bans_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "bans" */
export type Bans_Aggregate_Order_By = {
  avg?: InputMaybe<Bans_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bans_Max_Order_By>;
  min?: InputMaybe<Bans_Min_Order_By>;
  stddev?: InputMaybe<Bans_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bans_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bans_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bans_Sum_Order_By>;
  var_pop?: InputMaybe<Bans_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bans_Var_Samp_Order_By>;
  variance?: InputMaybe<Bans_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "bans" */
export type Bans_Arr_Rel_Insert_Input = {
  data: Array<Bans_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Bans_On_Conflict>;
};

/** aggregate avg on columns */
export type Bans_Avg_Fields = {
  __typename?: 'bans_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "bans" */
export type Bans_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bans". All fields are combined with a logical 'AND'. */
export type Bans_Bool_Exp = {
  _and?: InputMaybe<Array<Bans_Bool_Exp>>;
  _not?: InputMaybe<Bans_Bool_Exp>;
  _or?: InputMaybe<Array<Bans_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  ip?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "bans" */
export enum Bans_Constraint {
  /** unique or primary key constraint on columns "id" */
  BansPkey = 'bans_pkey'
}

/** input type for incrementing numeric columns in table "bans" */
export type Bans_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "bans" */
export type Bans_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Bans_Max_Fields = {
  __typename?: 'bans_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "bans" */
export type Bans_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bans_Min_Fields = {
  __typename?: 'bans_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "bans" */
export type Bans_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bans" */
export type Bans_Mutation_Response = {
  __typename?: 'bans_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Bans>;
};

/** on_conflict condition type for table "bans" */
export type Bans_On_Conflict = {
  constraint: Bans_Constraint;
  update_columns?: Array<Bans_Update_Column>;
  where?: InputMaybe<Bans_Bool_Exp>;
};

/** Ordering options when selecting data from "bans". */
export type Bans_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ip?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bans */
export type Bans_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "bans" */
export enum Bans_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Ip = 'ip',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "bans" */
export type Bans_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Bans_Stddev_Fields = {
  __typename?: 'bans_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "bans" */
export type Bans_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bans_Stddev_Pop_Fields = {
  __typename?: 'bans_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "bans" */
export type Bans_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bans_Stddev_Samp_Fields = {
  __typename?: 'bans_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "bans" */
export type Bans_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "bans" */
export type Bans_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Bans_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Bans_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Bans_Sum_Fields = {
  __typename?: 'bans_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "bans" */
export type Bans_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "bans" */
export enum Bans_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Ip = 'ip',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Bans_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Bans_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Bans_Set_Input>;
  /** filter the rows which have to be updated */
  where: Bans_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Bans_Var_Pop_Fields = {
  __typename?: 'bans_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "bans" */
export type Bans_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bans_Var_Samp_Fields = {
  __typename?: 'bans_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "bans" */
export type Bans_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Bans_Variance_Fields = {
  __typename?: 'bans_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "bans" */
export type Bans_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Challenges Data */
export type Challenges = {
  __typename?: 'challenges';
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  flag: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  machine: Machines;
  machine_id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  point: Scalars['Int']['output'];
  /** An array relationship */
  scores: Array<Scores>;
  /** An aggregate relationship */
  scores_aggregate: Scores_Aggregate;
  stage: Scalars['Int']['output'];
  /** An array relationship */
  submissions: Array<Submissions>;
  /** An aggregate relationship */
  submissions_aggregate: Submissions_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
};


/** Challenges Data */
export type ChallengesScoresArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


/** Challenges Data */
export type ChallengesScores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


/** Challenges Data */
export type ChallengesSubmissionsArgs = {
  distinct_on?: InputMaybe<Array<Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Submissions_Order_By>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};


/** Challenges Data */
export type ChallengesSubmissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Submissions_Order_By>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};

/** aggregated selection of "challenges" */
export type Challenges_Aggregate = {
  __typename?: 'challenges_aggregate';
  aggregate?: Maybe<Challenges_Aggregate_Fields>;
  nodes: Array<Challenges>;
};

export type Challenges_Aggregate_Bool_Exp = {
  count?: InputMaybe<Challenges_Aggregate_Bool_Exp_Count>;
};

export type Challenges_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Challenges_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Challenges_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "challenges" */
export type Challenges_Aggregate_Fields = {
  __typename?: 'challenges_aggregate_fields';
  avg?: Maybe<Challenges_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Challenges_Max_Fields>;
  min?: Maybe<Challenges_Min_Fields>;
  stddev?: Maybe<Challenges_Stddev_Fields>;
  stddev_pop?: Maybe<Challenges_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Challenges_Stddev_Samp_Fields>;
  sum?: Maybe<Challenges_Sum_Fields>;
  var_pop?: Maybe<Challenges_Var_Pop_Fields>;
  var_samp?: Maybe<Challenges_Var_Samp_Fields>;
  variance?: Maybe<Challenges_Variance_Fields>;
};


/** aggregate fields of "challenges" */
export type Challenges_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Challenges_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "challenges" */
export type Challenges_Aggregate_Order_By = {
  avg?: InputMaybe<Challenges_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Challenges_Max_Order_By>;
  min?: InputMaybe<Challenges_Min_Order_By>;
  stddev?: InputMaybe<Challenges_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Challenges_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Challenges_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Challenges_Sum_Order_By>;
  var_pop?: InputMaybe<Challenges_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Challenges_Var_Samp_Order_By>;
  variance?: InputMaybe<Challenges_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "challenges" */
export type Challenges_Arr_Rel_Insert_Input = {
  data: Array<Challenges_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Challenges_On_Conflict>;
};

/** aggregate avg on columns */
export type Challenges_Avg_Fields = {
  __typename?: 'challenges_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  machine_id?: Maybe<Scalars['Float']['output']>;
  point?: Maybe<Scalars['Float']['output']>;
  stage?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "challenges" */
export type Challenges_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  machine_id?: InputMaybe<Order_By>;
  point?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "challenges". All fields are combined with a logical 'AND'. */
export type Challenges_Bool_Exp = {
  _and?: InputMaybe<Array<Challenges_Bool_Exp>>;
  _not?: InputMaybe<Challenges_Bool_Exp>;
  _or?: InputMaybe<Array<Challenges_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  flag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  machine?: InputMaybe<Machines_Bool_Exp>;
  machine_id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  point?: InputMaybe<Int_Comparison_Exp>;
  scores?: InputMaybe<Scores_Bool_Exp>;
  scores_aggregate?: InputMaybe<Scores_Aggregate_Bool_Exp>;
  stage?: InputMaybe<Int_Comparison_Exp>;
  submissions?: InputMaybe<Submissions_Bool_Exp>;
  submissions_aggregate?: InputMaybe<Submissions_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "challenges" */
export enum Challenges_Constraint {
  /** unique or primary key constraint on columns "flag" */
  ChallengesFlagKey = 'challenges_flag_key',
  /** unique or primary key constraint on columns "name" */
  ChallengesNameKey = 'challenges_name_key',
  /** unique or primary key constraint on columns "id" */
  ChallengesPkey = 'challenges_pkey'
}

/** input type for incrementing numeric columns in table "challenges" */
export type Challenges_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  machine_id?: InputMaybe<Scalars['bigint']['input']>;
  point?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "challenges" */
export type Challenges_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  flag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  machine?: InputMaybe<Machines_Obj_Rel_Insert_Input>;
  machine_id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  point?: InputMaybe<Scalars['Int']['input']>;
  scores?: InputMaybe<Scores_Arr_Rel_Insert_Input>;
  stage?: InputMaybe<Scalars['Int']['input']>;
  submissions?: InputMaybe<Submissions_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Challenges_Max_Fields = {
  __typename?: 'challenges_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  flag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  machine_id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  point?: Maybe<Scalars['Int']['output']>;
  stage?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "challenges" */
export type Challenges_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  flag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  machine_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  point?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Challenges_Min_Fields = {
  __typename?: 'challenges_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  flag?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  machine_id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  point?: Maybe<Scalars['Int']['output']>;
  stage?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "challenges" */
export type Challenges_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  flag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  machine_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  point?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "challenges" */
export type Challenges_Mutation_Response = {
  __typename?: 'challenges_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Challenges>;
};

/** input type for inserting object relation for remote table "challenges" */
export type Challenges_Obj_Rel_Insert_Input = {
  data: Challenges_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Challenges_On_Conflict>;
};

/** on_conflict condition type for table "challenges" */
export type Challenges_On_Conflict = {
  constraint: Challenges_Constraint;
  update_columns?: Array<Challenges_Update_Column>;
  where?: InputMaybe<Challenges_Bool_Exp>;
};

/** Ordering options when selecting data from "challenges". */
export type Challenges_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  flag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  machine?: InputMaybe<Machines_Order_By>;
  machine_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  point?: InputMaybe<Order_By>;
  scores_aggregate?: InputMaybe<Scores_Aggregate_Order_By>;
  stage?: InputMaybe<Order_By>;
  submissions_aggregate?: InputMaybe<Submissions_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: challenges */
export type Challenges_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "challenges" */
export enum Challenges_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Flag = 'flag',
  /** column name */
  Id = 'id',
  /** column name */
  MachineId = 'machine_id',
  /** column name */
  Name = 'name',
  /** column name */
  Point = 'point',
  /** column name */
  Stage = 'stage',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "challenges" */
export type Challenges_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  flag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  machine_id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  point?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Challenges_Stddev_Fields = {
  __typename?: 'challenges_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  machine_id?: Maybe<Scalars['Float']['output']>;
  point?: Maybe<Scalars['Float']['output']>;
  stage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "challenges" */
export type Challenges_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  machine_id?: InputMaybe<Order_By>;
  point?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Challenges_Stddev_Pop_Fields = {
  __typename?: 'challenges_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  machine_id?: Maybe<Scalars['Float']['output']>;
  point?: Maybe<Scalars['Float']['output']>;
  stage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "challenges" */
export type Challenges_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  machine_id?: InputMaybe<Order_By>;
  point?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Challenges_Stddev_Samp_Fields = {
  __typename?: 'challenges_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  machine_id?: Maybe<Scalars['Float']['output']>;
  point?: Maybe<Scalars['Float']['output']>;
  stage?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "challenges" */
export type Challenges_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  machine_id?: InputMaybe<Order_By>;
  point?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "challenges" */
export type Challenges_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Challenges_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Challenges_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  flag?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  machine_id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  point?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Challenges_Sum_Fields = {
  __typename?: 'challenges_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  machine_id?: Maybe<Scalars['bigint']['output']>;
  point?: Maybe<Scalars['Int']['output']>;
  stage?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "challenges" */
export type Challenges_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  machine_id?: InputMaybe<Order_By>;
  point?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
};

/** update columns of table "challenges" */
export enum Challenges_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Flag = 'flag',
  /** column name */
  Id = 'id',
  /** column name */
  MachineId = 'machine_id',
  /** column name */
  Name = 'name',
  /** column name */
  Point = 'point',
  /** column name */
  Stage = 'stage',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Challenges_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Challenges_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Challenges_Set_Input>;
  /** filter the rows which have to be updated */
  where: Challenges_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Challenges_Var_Pop_Fields = {
  __typename?: 'challenges_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  machine_id?: Maybe<Scalars['Float']['output']>;
  point?: Maybe<Scalars['Float']['output']>;
  stage?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "challenges" */
export type Challenges_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  machine_id?: InputMaybe<Order_By>;
  point?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Challenges_Var_Samp_Fields = {
  __typename?: 'challenges_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  machine_id?: Maybe<Scalars['Float']['output']>;
  point?: Maybe<Scalars['Float']['output']>;
  stage?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "challenges" */
export type Challenges_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  machine_id?: InputMaybe<Order_By>;
  point?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Challenges_Variance_Fields = {
  __typename?: 'challenges_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  machine_id?: Maybe<Scalars['Float']['output']>;
  point?: Maybe<Scalars['Float']['output']>;
  stage?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "challenges" */
export type Challenges_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  machine_id?: InputMaybe<Order_By>;
  point?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Machines Data */
export type Machines = {
  __typename?: 'machines';
  /** An array relationship */
  challenges: Array<Challenges>;
  /** An aggregate relationship */
  challenges_aggregate: Challenges_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  name: Scalars['String']['output'];
  no_of_solves: Scalars['Int']['output'];
  tags: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** Machines Data */
export type MachinesChallengesArgs = {
  distinct_on?: InputMaybe<Array<Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Challenges_Order_By>>;
  where?: InputMaybe<Challenges_Bool_Exp>;
};


/** Machines Data */
export type MachinesChallenges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Challenges_Order_By>>;
  where?: InputMaybe<Challenges_Bool_Exp>;
};

/** aggregated selection of "machines" */
export type Machines_Aggregate = {
  __typename?: 'machines_aggregate';
  aggregate?: Maybe<Machines_Aggregate_Fields>;
  nodes: Array<Machines>;
};

/** aggregate fields of "machines" */
export type Machines_Aggregate_Fields = {
  __typename?: 'machines_aggregate_fields';
  avg?: Maybe<Machines_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Machines_Max_Fields>;
  min?: Maybe<Machines_Min_Fields>;
  stddev?: Maybe<Machines_Stddev_Fields>;
  stddev_pop?: Maybe<Machines_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Machines_Stddev_Samp_Fields>;
  sum?: Maybe<Machines_Sum_Fields>;
  var_pop?: Maybe<Machines_Var_Pop_Fields>;
  var_samp?: Maybe<Machines_Var_Samp_Fields>;
  variance?: Maybe<Machines_Variance_Fields>;
};


/** aggregate fields of "machines" */
export type Machines_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Machines_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Machines_Avg_Fields = {
  __typename?: 'machines_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  no_of_solves?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "machines". All fields are combined with a logical 'AND'. */
export type Machines_Bool_Exp = {
  _and?: InputMaybe<Array<Machines_Bool_Exp>>;
  _not?: InputMaybe<Machines_Bool_Exp>;
  _or?: InputMaybe<Array<Machines_Bool_Exp>>;
  challenges?: InputMaybe<Challenges_Bool_Exp>;
  challenges_aggregate?: InputMaybe<Challenges_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  no_of_solves?: InputMaybe<Int_Comparison_Exp>;
  tags?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "machines" */
export enum Machines_Constraint {
  /** unique or primary key constraint on columns "name" */
  MachinesNameKey = 'machines_name_key',
  /** unique or primary key constraint on columns "id" */
  MachinesPkey = 'machines_pkey'
}

/** input type for incrementing numeric columns in table "machines" */
export type Machines_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  no_of_solves?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "machines" */
export type Machines_Insert_Input = {
  challenges?: InputMaybe<Challenges_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  no_of_solves?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Machines_Max_Fields = {
  __typename?: 'machines_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  no_of_solves?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Machines_Min_Fields = {
  __typename?: 'machines_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  no_of_solves?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "machines" */
export type Machines_Mutation_Response = {
  __typename?: 'machines_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Machines>;
};

/** input type for inserting object relation for remote table "machines" */
export type Machines_Obj_Rel_Insert_Input = {
  data: Machines_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Machines_On_Conflict>;
};

/** on_conflict condition type for table "machines" */
export type Machines_On_Conflict = {
  constraint: Machines_Constraint;
  update_columns?: Array<Machines_Update_Column>;
  where?: InputMaybe<Machines_Bool_Exp>;
};

/** Ordering options when selecting data from "machines". */
export type Machines_Order_By = {
  challenges_aggregate?: InputMaybe<Challenges_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  no_of_solves?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: machines */
export type Machines_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "machines" */
export enum Machines_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NoOfSolves = 'no_of_solves',
  /** column name */
  Tags = 'tags',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "machines" */
export type Machines_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  no_of_solves?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Machines_Stddev_Fields = {
  __typename?: 'machines_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  no_of_solves?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Machines_Stddev_Pop_Fields = {
  __typename?: 'machines_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  no_of_solves?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Machines_Stddev_Samp_Fields = {
  __typename?: 'machines_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  no_of_solves?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "machines" */
export type Machines_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Machines_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Machines_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  no_of_solves?: InputMaybe<Scalars['Int']['input']>;
  tags?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Machines_Sum_Fields = {
  __typename?: 'machines_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  no_of_solves?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "machines" */
export enum Machines_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NoOfSolves = 'no_of_solves',
  /** column name */
  Tags = 'tags',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Machines_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Machines_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Machines_Set_Input>;
  /** filter the rows which have to be updated */
  where: Machines_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Machines_Var_Pop_Fields = {
  __typename?: 'machines_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  no_of_solves?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Machines_Var_Samp_Fields = {
  __typename?: 'machines_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  no_of_solves?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Machines_Variance_Fields = {
  __typename?: 'machines_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  no_of_solves?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "bans" */
  delete_bans?: Maybe<Bans_Mutation_Response>;
  /** delete single row from the table: "bans" */
  delete_bans_by_pk?: Maybe<Bans>;
  /** delete data from the table: "challenges" */
  delete_challenges?: Maybe<Challenges_Mutation_Response>;
  /** delete single row from the table: "challenges" */
  delete_challenges_by_pk?: Maybe<Challenges>;
  /** delete data from the table: "machines" */
  delete_machines?: Maybe<Machines_Mutation_Response>;
  /** delete single row from the table: "machines" */
  delete_machines_by_pk?: Maybe<Machines>;
  /** delete data from the table: "scores" */
  delete_scores?: Maybe<Scores_Mutation_Response>;
  /** delete single row from the table: "scores" */
  delete_scores_by_pk?: Maybe<Scores>;
  /** delete data from the table: "submissions" */
  delete_submissions?: Maybe<Submissions_Mutation_Response>;
  /** delete single row from the table: "submissions" */
  delete_submissions_by_pk?: Maybe<Submissions>;
  /** delete data from the table: "teams" */
  delete_teams?: Maybe<Teams_Mutation_Response>;
  /** delete single row from the table: "teams" */
  delete_teams_by_pk?: Maybe<Teams>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "bans" */
  insert_bans?: Maybe<Bans_Mutation_Response>;
  /** insert a single row into the table: "bans" */
  insert_bans_one?: Maybe<Bans>;
  /** insert data into the table: "challenges" */
  insert_challenges?: Maybe<Challenges_Mutation_Response>;
  /** insert a single row into the table: "challenges" */
  insert_challenges_one?: Maybe<Challenges>;
  /** insert data into the table: "machines" */
  insert_machines?: Maybe<Machines_Mutation_Response>;
  /** insert a single row into the table: "machines" */
  insert_machines_one?: Maybe<Machines>;
  /** insert data into the table: "scores" */
  insert_scores?: Maybe<Scores_Mutation_Response>;
  /** insert a single row into the table: "scores" */
  insert_scores_one?: Maybe<Scores>;
  /** insert data into the table: "submissions" */
  insert_submissions?: Maybe<Submissions_Mutation_Response>;
  /** insert a single row into the table: "submissions" */
  insert_submissions_one?: Maybe<Submissions>;
  /** insert data into the table: "teams" */
  insert_teams?: Maybe<Teams_Mutation_Response>;
  /** insert a single row into the table: "teams" */
  insert_teams_one?: Maybe<Teams>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "bans" */
  update_bans?: Maybe<Bans_Mutation_Response>;
  /** update single row of the table: "bans" */
  update_bans_by_pk?: Maybe<Bans>;
  /** update multiples rows of table: "bans" */
  update_bans_many?: Maybe<Array<Maybe<Bans_Mutation_Response>>>;
  /** update data of the table: "challenges" */
  update_challenges?: Maybe<Challenges_Mutation_Response>;
  /** update single row of the table: "challenges" */
  update_challenges_by_pk?: Maybe<Challenges>;
  /** update multiples rows of table: "challenges" */
  update_challenges_many?: Maybe<Array<Maybe<Challenges_Mutation_Response>>>;
  /** update data of the table: "machines" */
  update_machines?: Maybe<Machines_Mutation_Response>;
  /** update single row of the table: "machines" */
  update_machines_by_pk?: Maybe<Machines>;
  /** update multiples rows of table: "machines" */
  update_machines_many?: Maybe<Array<Maybe<Machines_Mutation_Response>>>;
  /** update data of the table: "scores" */
  update_scores?: Maybe<Scores_Mutation_Response>;
  /** update single row of the table: "scores" */
  update_scores_by_pk?: Maybe<Scores>;
  /** update multiples rows of table: "scores" */
  update_scores_many?: Maybe<Array<Maybe<Scores_Mutation_Response>>>;
  /** update data of the table: "submissions" */
  update_submissions?: Maybe<Submissions_Mutation_Response>;
  /** update single row of the table: "submissions" */
  update_submissions_by_pk?: Maybe<Submissions>;
  /** update multiples rows of table: "submissions" */
  update_submissions_many?: Maybe<Array<Maybe<Submissions_Mutation_Response>>>;
  /** update data of the table: "teams" */
  update_teams?: Maybe<Teams_Mutation_Response>;
  /** update single row of the table: "teams" */
  update_teams_by_pk?: Maybe<Teams>;
  /** update multiples rows of table: "teams" */
  update_teams_many?: Maybe<Array<Maybe<Teams_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_BansArgs = {
  where: Bans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bans_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ChallengesArgs = {
  where: Challenges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Challenges_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MachinesArgs = {
  where: Machines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Machines_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ScoresArgs = {
  where: Scores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Scores_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SubmissionsArgs = {
  where: Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Submissions_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_TeamsArgs = {
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Teams_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootInsert_BansArgs = {
  objects: Array<Bans_Insert_Input>;
  on_conflict?: InputMaybe<Bans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bans_OneArgs = {
  object: Bans_Insert_Input;
  on_conflict?: InputMaybe<Bans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChallengesArgs = {
  objects: Array<Challenges_Insert_Input>;
  on_conflict?: InputMaybe<Challenges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Challenges_OneArgs = {
  object: Challenges_Insert_Input;
  on_conflict?: InputMaybe<Challenges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MachinesArgs = {
  objects: Array<Machines_Insert_Input>;
  on_conflict?: InputMaybe<Machines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Machines_OneArgs = {
  object: Machines_Insert_Input;
  on_conflict?: InputMaybe<Machines_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ScoresArgs = {
  objects: Array<Scores_Insert_Input>;
  on_conflict?: InputMaybe<Scores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Scores_OneArgs = {
  object: Scores_Insert_Input;
  on_conflict?: InputMaybe<Scores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubmissionsArgs = {
  objects: Array<Submissions_Insert_Input>;
  on_conflict?: InputMaybe<Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Submissions_OneArgs = {
  object: Submissions_Insert_Input;
  on_conflict?: InputMaybe<Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamsArgs = {
  objects: Array<Teams_Insert_Input>;
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Teams_OneArgs = {
  object: Teams_Insert_Input;
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BansArgs = {
  _inc?: InputMaybe<Bans_Inc_Input>;
  _set?: InputMaybe<Bans_Set_Input>;
  where: Bans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bans_By_PkArgs = {
  _inc?: InputMaybe<Bans_Inc_Input>;
  _set?: InputMaybe<Bans_Set_Input>;
  pk_columns: Bans_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Bans_ManyArgs = {
  updates: Array<Bans_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ChallengesArgs = {
  _inc?: InputMaybe<Challenges_Inc_Input>;
  _set?: InputMaybe<Challenges_Set_Input>;
  where: Challenges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Challenges_By_PkArgs = {
  _inc?: InputMaybe<Challenges_Inc_Input>;
  _set?: InputMaybe<Challenges_Set_Input>;
  pk_columns: Challenges_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Challenges_ManyArgs = {
  updates: Array<Challenges_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MachinesArgs = {
  _inc?: InputMaybe<Machines_Inc_Input>;
  _set?: InputMaybe<Machines_Set_Input>;
  where: Machines_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Machines_By_PkArgs = {
  _inc?: InputMaybe<Machines_Inc_Input>;
  _set?: InputMaybe<Machines_Set_Input>;
  pk_columns: Machines_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Machines_ManyArgs = {
  updates: Array<Machines_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ScoresArgs = {
  _inc?: InputMaybe<Scores_Inc_Input>;
  _set?: InputMaybe<Scores_Set_Input>;
  where: Scores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Scores_By_PkArgs = {
  _inc?: InputMaybe<Scores_Inc_Input>;
  _set?: InputMaybe<Scores_Set_Input>;
  pk_columns: Scores_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Scores_ManyArgs = {
  updates: Array<Scores_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SubmissionsArgs = {
  _inc?: InputMaybe<Submissions_Inc_Input>;
  _set?: InputMaybe<Submissions_Set_Input>;
  where: Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Submissions_By_PkArgs = {
  _inc?: InputMaybe<Submissions_Inc_Input>;
  _set?: InputMaybe<Submissions_Set_Input>;
  pk_columns: Submissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Submissions_ManyArgs = {
  updates: Array<Submissions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TeamsArgs = {
  _inc?: InputMaybe<Teams_Inc_Input>;
  _set?: InputMaybe<Teams_Set_Input>;
  where: Teams_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Teams_By_PkArgs = {
  _inc?: InputMaybe<Teams_Inc_Input>;
  _set?: InputMaybe<Teams_Set_Input>;
  pk_columns: Teams_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Teams_ManyArgs = {
  updates: Array<Teams_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  bans: Array<Bans>;
  /** An aggregate relationship */
  bans_aggregate: Bans_Aggregate;
  /** fetch data from the table: "bans" using primary key columns */
  bans_by_pk?: Maybe<Bans>;
  /** An array relationship */
  challenges: Array<Challenges>;
  /** An aggregate relationship */
  challenges_aggregate: Challenges_Aggregate;
  /** fetch data from the table: "challenges" using primary key columns */
  challenges_by_pk?: Maybe<Challenges>;
  /** fetch data from the table: "machines" */
  machines: Array<Machines>;
  /** fetch aggregated fields from the table: "machines" */
  machines_aggregate: Machines_Aggregate;
  /** fetch data from the table: "machines" using primary key columns */
  machines_by_pk?: Maybe<Machines>;
  /** An array relationship */
  scores: Array<Scores>;
  /** An aggregate relationship */
  scores_aggregate: Scores_Aggregate;
  /** fetch data from the table: "scores" using primary key columns */
  scores_by_pk?: Maybe<Scores>;
  /** An array relationship */
  submissions: Array<Submissions>;
  /** An aggregate relationship */
  submissions_aggregate: Submissions_Aggregate;
  /** fetch data from the table: "submissions" using primary key columns */
  submissions_by_pk?: Maybe<Submissions>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootBansArgs = {
  distinct_on?: InputMaybe<Array<Bans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bans_Order_By>>;
  where?: InputMaybe<Bans_Bool_Exp>;
};


export type Query_RootBans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bans_Order_By>>;
  where?: InputMaybe<Bans_Bool_Exp>;
};


export type Query_RootBans_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootChallengesArgs = {
  distinct_on?: InputMaybe<Array<Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Challenges_Order_By>>;
  where?: InputMaybe<Challenges_Bool_Exp>;
};


export type Query_RootChallenges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Challenges_Order_By>>;
  where?: InputMaybe<Challenges_Bool_Exp>;
};


export type Query_RootChallenges_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootMachinesArgs = {
  distinct_on?: InputMaybe<Array<Machines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Machines_Order_By>>;
  where?: InputMaybe<Machines_Bool_Exp>;
};


export type Query_RootMachines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Machines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Machines_Order_By>>;
  where?: InputMaybe<Machines_Bool_Exp>;
};


export type Query_RootMachines_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootScoresArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


export type Query_RootScores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


export type Query_RootScores_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootSubmissionsArgs = {
  distinct_on?: InputMaybe<Array<Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Submissions_Order_By>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};


export type Query_RootSubmissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Submissions_Order_By>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};


export type Query_RootSubmissions_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootTeamsArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Query_RootTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Query_RootTeams_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** Scoreboard Data */
export type Scores = {
  __typename?: 'scores';
  /** An object relationship */
  challenge: Challenges;
  challenge_id: Scalars['bigint']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  submission: Submissions;
  submission_id: Scalars['bigint']['output'];
  /** An object relationship */
  team: Teams;
  team_id: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "scores" */
export type Scores_Aggregate = {
  __typename?: 'scores_aggregate';
  aggregate?: Maybe<Scores_Aggregate_Fields>;
  nodes: Array<Scores>;
};

export type Scores_Aggregate_Bool_Exp = {
  count?: InputMaybe<Scores_Aggregate_Bool_Exp_Count>;
};

export type Scores_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Scores_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Scores_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "scores" */
export type Scores_Aggregate_Fields = {
  __typename?: 'scores_aggregate_fields';
  avg?: Maybe<Scores_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Scores_Max_Fields>;
  min?: Maybe<Scores_Min_Fields>;
  stddev?: Maybe<Scores_Stddev_Fields>;
  stddev_pop?: Maybe<Scores_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Scores_Stddev_Samp_Fields>;
  sum?: Maybe<Scores_Sum_Fields>;
  var_pop?: Maybe<Scores_Var_Pop_Fields>;
  var_samp?: Maybe<Scores_Var_Samp_Fields>;
  variance?: Maybe<Scores_Variance_Fields>;
};


/** aggregate fields of "scores" */
export type Scores_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Scores_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "scores" */
export type Scores_Aggregate_Order_By = {
  avg?: InputMaybe<Scores_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Scores_Max_Order_By>;
  min?: InputMaybe<Scores_Min_Order_By>;
  stddev?: InputMaybe<Scores_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Scores_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Scores_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Scores_Sum_Order_By>;
  var_pop?: InputMaybe<Scores_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Scores_Var_Samp_Order_By>;
  variance?: InputMaybe<Scores_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "scores" */
export type Scores_Arr_Rel_Insert_Input = {
  data: Array<Scores_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Scores_On_Conflict>;
};

/** aggregate avg on columns */
export type Scores_Avg_Fields = {
  __typename?: 'scores_avg_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  submission_id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "scores" */
export type Scores_Avg_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submission_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "scores". All fields are combined with a logical 'AND'. */
export type Scores_Bool_Exp = {
  _and?: InputMaybe<Array<Scores_Bool_Exp>>;
  _not?: InputMaybe<Scores_Bool_Exp>;
  _or?: InputMaybe<Array<Scores_Bool_Exp>>;
  challenge?: InputMaybe<Challenges_Bool_Exp>;
  challenge_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  submission?: InputMaybe<Submissions_Bool_Exp>;
  submission_id?: InputMaybe<Bigint_Comparison_Exp>;
  team?: InputMaybe<Teams_Bool_Exp>;
  team_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "scores" */
export enum Scores_Constraint {
  /** unique or primary key constraint on columns "id" */
  ScoresPkey = 'scores_pkey',
  /** unique or primary key constraint on columns "submission_id" */
  ScoresSubmissionIdKey = 'scores_submission_id_key'
}

/** input type for incrementing numeric columns in table "scores" */
export type Scores_Inc_Input = {
  challenge_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  submission_id?: InputMaybe<Scalars['bigint']['input']>;
  team_id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "scores" */
export type Scores_Insert_Input = {
  challenge?: InputMaybe<Challenges_Obj_Rel_Insert_Input>;
  challenge_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  submission?: InputMaybe<Submissions_Obj_Rel_Insert_Input>;
  submission_id?: InputMaybe<Scalars['bigint']['input']>;
  team?: InputMaybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Scores_Max_Fields = {
  __typename?: 'scores_max_fields';
  challenge_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  submission_id?: Maybe<Scalars['bigint']['output']>;
  team_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "scores" */
export type Scores_Max_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submission_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Scores_Min_Fields = {
  __typename?: 'scores_min_fields';
  challenge_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  submission_id?: Maybe<Scalars['bigint']['output']>;
  team_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "scores" */
export type Scores_Min_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submission_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "scores" */
export type Scores_Mutation_Response = {
  __typename?: 'scores_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Scores>;
};

/** input type for inserting object relation for remote table "scores" */
export type Scores_Obj_Rel_Insert_Input = {
  data: Scores_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Scores_On_Conflict>;
};

/** on_conflict condition type for table "scores" */
export type Scores_On_Conflict = {
  constraint: Scores_Constraint;
  update_columns?: Array<Scores_Update_Column>;
  where?: InputMaybe<Scores_Bool_Exp>;
};

/** Ordering options when selecting data from "scores". */
export type Scores_Order_By = {
  challenge?: InputMaybe<Challenges_Order_By>;
  challenge_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submission?: InputMaybe<Submissions_Order_By>;
  submission_id?: InputMaybe<Order_By>;
  team?: InputMaybe<Teams_Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: scores */
export type Scores_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "scores" */
export enum Scores_Select_Column {
  /** column name */
  ChallengeId = 'challenge_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SubmissionId = 'submission_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "scores" */
export type Scores_Set_Input = {
  challenge_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  submission_id?: InputMaybe<Scalars['bigint']['input']>;
  team_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Scores_Stddev_Fields = {
  __typename?: 'scores_stddev_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  submission_id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "scores" */
export type Scores_Stddev_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submission_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Scores_Stddev_Pop_Fields = {
  __typename?: 'scores_stddev_pop_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  submission_id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "scores" */
export type Scores_Stddev_Pop_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submission_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Scores_Stddev_Samp_Fields = {
  __typename?: 'scores_stddev_samp_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  submission_id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "scores" */
export type Scores_Stddev_Samp_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submission_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "scores" */
export type Scores_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Scores_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Scores_Stream_Cursor_Value_Input = {
  challenge_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  submission_id?: InputMaybe<Scalars['bigint']['input']>;
  team_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Scores_Sum_Fields = {
  __typename?: 'scores_sum_fields';
  challenge_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  submission_id?: Maybe<Scalars['bigint']['output']>;
  team_id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "scores" */
export type Scores_Sum_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submission_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "scores" */
export enum Scores_Update_Column {
  /** column name */
  ChallengeId = 'challenge_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SubmissionId = 'submission_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Scores_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Scores_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Scores_Set_Input>;
  /** filter the rows which have to be updated */
  where: Scores_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Scores_Var_Pop_Fields = {
  __typename?: 'scores_var_pop_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  submission_id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "scores" */
export type Scores_Var_Pop_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submission_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Scores_Var_Samp_Fields = {
  __typename?: 'scores_var_samp_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  submission_id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "scores" */
export type Scores_Var_Samp_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submission_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Scores_Variance_Fields = {
  __typename?: 'scores_variance_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  submission_id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "scores" */
export type Scores_Variance_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submission_id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** User flag submissions */
export type Submissions = {
  __typename?: 'submissions';
  /** An object relationship */
  challenge: Challenges;
  challenge_id: Scalars['bigint']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** An object relationship */
  score?: Maybe<Scores>;
  submited_flag: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "submissions" */
export type Submissions_Aggregate = {
  __typename?: 'submissions_aggregate';
  aggregate?: Maybe<Submissions_Aggregate_Fields>;
  nodes: Array<Submissions>;
};

export type Submissions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Submissions_Aggregate_Bool_Exp_Count>;
};

export type Submissions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Submissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Submissions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "submissions" */
export type Submissions_Aggregate_Fields = {
  __typename?: 'submissions_aggregate_fields';
  avg?: Maybe<Submissions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Submissions_Max_Fields>;
  min?: Maybe<Submissions_Min_Fields>;
  stddev?: Maybe<Submissions_Stddev_Fields>;
  stddev_pop?: Maybe<Submissions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Submissions_Stddev_Samp_Fields>;
  sum?: Maybe<Submissions_Sum_Fields>;
  var_pop?: Maybe<Submissions_Var_Pop_Fields>;
  var_samp?: Maybe<Submissions_Var_Samp_Fields>;
  variance?: Maybe<Submissions_Variance_Fields>;
};


/** aggregate fields of "submissions" */
export type Submissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Submissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "submissions" */
export type Submissions_Aggregate_Order_By = {
  avg?: InputMaybe<Submissions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Submissions_Max_Order_By>;
  min?: InputMaybe<Submissions_Min_Order_By>;
  stddev?: InputMaybe<Submissions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Submissions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Submissions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Submissions_Sum_Order_By>;
  var_pop?: InputMaybe<Submissions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Submissions_Var_Samp_Order_By>;
  variance?: InputMaybe<Submissions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "submissions" */
export type Submissions_Arr_Rel_Insert_Input = {
  data: Array<Submissions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Submissions_On_Conflict>;
};

/** aggregate avg on columns */
export type Submissions_Avg_Fields = {
  __typename?: 'submissions_avg_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "submissions" */
export type Submissions_Avg_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "submissions". All fields are combined with a logical 'AND'. */
export type Submissions_Bool_Exp = {
  _and?: InputMaybe<Array<Submissions_Bool_Exp>>;
  _not?: InputMaybe<Submissions_Bool_Exp>;
  _or?: InputMaybe<Array<Submissions_Bool_Exp>>;
  challenge?: InputMaybe<Challenges_Bool_Exp>;
  challenge_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  score?: InputMaybe<Scores_Bool_Exp>;
  submited_flag?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "submissions" */
export enum Submissions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubmissionsPkey = 'submissions_pkey'
}

/** input type for incrementing numeric columns in table "submissions" */
export type Submissions_Inc_Input = {
  challenge_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "submissions" */
export type Submissions_Insert_Input = {
  challenge?: InputMaybe<Challenges_Obj_Rel_Insert_Input>;
  challenge_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  score?: InputMaybe<Scores_Obj_Rel_Insert_Input>;
  submited_flag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Submissions_Max_Fields = {
  __typename?: 'submissions_max_fields';
  challenge_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  submited_flag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "submissions" */
export type Submissions_Max_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submited_flag?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Submissions_Min_Fields = {
  __typename?: 'submissions_min_fields';
  challenge_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  submited_flag?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "submissions" */
export type Submissions_Min_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  submited_flag?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "submissions" */
export type Submissions_Mutation_Response = {
  __typename?: 'submissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Submissions>;
};

/** input type for inserting object relation for remote table "submissions" */
export type Submissions_Obj_Rel_Insert_Input = {
  data: Submissions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Submissions_On_Conflict>;
};

/** on_conflict condition type for table "submissions" */
export type Submissions_On_Conflict = {
  constraint: Submissions_Constraint;
  update_columns?: Array<Submissions_Update_Column>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};

/** Ordering options when selecting data from "submissions". */
export type Submissions_Order_By = {
  challenge?: InputMaybe<Challenges_Order_By>;
  challenge_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  score?: InputMaybe<Scores_Order_By>;
  submited_flag?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: submissions */
export type Submissions_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "submissions" */
export enum Submissions_Select_Column {
  /** column name */
  ChallengeId = 'challenge_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SubmitedFlag = 'submited_flag',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "submissions" */
export type Submissions_Set_Input = {
  challenge_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  submited_flag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Submissions_Stddev_Fields = {
  __typename?: 'submissions_stddev_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "submissions" */
export type Submissions_Stddev_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Submissions_Stddev_Pop_Fields = {
  __typename?: 'submissions_stddev_pop_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "submissions" */
export type Submissions_Stddev_Pop_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Submissions_Stddev_Samp_Fields = {
  __typename?: 'submissions_stddev_samp_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "submissions" */
export type Submissions_Stddev_Samp_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "submissions" */
export type Submissions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Submissions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Submissions_Stream_Cursor_Value_Input = {
  challenge_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  submited_flag?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Submissions_Sum_Fields = {
  __typename?: 'submissions_sum_fields';
  challenge_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "submissions" */
export type Submissions_Sum_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "submissions" */
export enum Submissions_Update_Column {
  /** column name */
  ChallengeId = 'challenge_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SubmitedFlag = 'submited_flag',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Submissions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Submissions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Submissions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Submissions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Submissions_Var_Pop_Fields = {
  __typename?: 'submissions_var_pop_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "submissions" */
export type Submissions_Var_Pop_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Submissions_Var_Samp_Fields = {
  __typename?: 'submissions_var_samp_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "submissions" */
export type Submissions_Var_Samp_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Submissions_Variance_Fields = {
  __typename?: 'submissions_variance_fields';
  challenge_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "submissions" */
export type Submissions_Variance_Order_By = {
  challenge_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  bans: Array<Bans>;
  /** An aggregate relationship */
  bans_aggregate: Bans_Aggregate;
  /** fetch data from the table: "bans" using primary key columns */
  bans_by_pk?: Maybe<Bans>;
  /** fetch data from the table in a streaming manner: "bans" */
  bans_stream: Array<Bans>;
  /** An array relationship */
  challenges: Array<Challenges>;
  /** An aggregate relationship */
  challenges_aggregate: Challenges_Aggregate;
  /** fetch data from the table: "challenges" using primary key columns */
  challenges_by_pk?: Maybe<Challenges>;
  /** fetch data from the table in a streaming manner: "challenges" */
  challenges_stream: Array<Challenges>;
  /** fetch data from the table: "machines" */
  machines: Array<Machines>;
  /** fetch aggregated fields from the table: "machines" */
  machines_aggregate: Machines_Aggregate;
  /** fetch data from the table: "machines" using primary key columns */
  machines_by_pk?: Maybe<Machines>;
  /** fetch data from the table in a streaming manner: "machines" */
  machines_stream: Array<Machines>;
  /** An array relationship */
  scores: Array<Scores>;
  /** An aggregate relationship */
  scores_aggregate: Scores_Aggregate;
  /** fetch data from the table: "scores" using primary key columns */
  scores_by_pk?: Maybe<Scores>;
  /** fetch data from the table in a streaming manner: "scores" */
  scores_stream: Array<Scores>;
  /** An array relationship */
  submissions: Array<Submissions>;
  /** An aggregate relationship */
  submissions_aggregate: Submissions_Aggregate;
  /** fetch data from the table: "submissions" using primary key columns */
  submissions_by_pk?: Maybe<Submissions>;
  /** fetch data from the table in a streaming manner: "submissions" */
  submissions_stream: Array<Submissions>;
  /** fetch data from the table: "teams" */
  teams: Array<Teams>;
  /** fetch aggregated fields from the table: "teams" */
  teams_aggregate: Teams_Aggregate;
  /** fetch data from the table: "teams" using primary key columns */
  teams_by_pk?: Maybe<Teams>;
  /** fetch data from the table in a streaming manner: "teams" */
  teams_stream: Array<Teams>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootBansArgs = {
  distinct_on?: InputMaybe<Array<Bans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bans_Order_By>>;
  where?: InputMaybe<Bans_Bool_Exp>;
};


export type Subscription_RootBans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bans_Order_By>>;
  where?: InputMaybe<Bans_Bool_Exp>;
};


export type Subscription_RootBans_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootBans_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Bans_Stream_Cursor_Input>>;
  where?: InputMaybe<Bans_Bool_Exp>;
};


export type Subscription_RootChallengesArgs = {
  distinct_on?: InputMaybe<Array<Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Challenges_Order_By>>;
  where?: InputMaybe<Challenges_Bool_Exp>;
};


export type Subscription_RootChallenges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Challenges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Challenges_Order_By>>;
  where?: InputMaybe<Challenges_Bool_Exp>;
};


export type Subscription_RootChallenges_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootChallenges_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Challenges_Stream_Cursor_Input>>;
  where?: InputMaybe<Challenges_Bool_Exp>;
};


export type Subscription_RootMachinesArgs = {
  distinct_on?: InputMaybe<Array<Machines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Machines_Order_By>>;
  where?: InputMaybe<Machines_Bool_Exp>;
};


export type Subscription_RootMachines_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Machines_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Machines_Order_By>>;
  where?: InputMaybe<Machines_Bool_Exp>;
};


export type Subscription_RootMachines_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootMachines_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Machines_Stream_Cursor_Input>>;
  where?: InputMaybe<Machines_Bool_Exp>;
};


export type Subscription_RootScoresArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


export type Subscription_RootScores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


export type Subscription_RootScores_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootScores_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Scores_Stream_Cursor_Input>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


export type Subscription_RootSubmissionsArgs = {
  distinct_on?: InputMaybe<Array<Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Submissions_Order_By>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};


export type Subscription_RootSubmissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Submissions_Order_By>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};


export type Subscription_RootSubmissions_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootSubmissions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Submissions_Stream_Cursor_Input>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};


export type Subscription_RootTeamsArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Subscription_RootTeams_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Teams_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Teams_Order_By>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Subscription_RootTeams_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootTeams_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Teams_Stream_Cursor_Input>>;
  where?: InputMaybe<Teams_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Teams Data */
export type Teams = {
  __typename?: 'teams';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  join_code: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  scores: Array<Scores>;
  /** An aggregate relationship */
  scores_aggregate: Scores_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
};


/** Teams Data */
export type TeamsScoresArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


/** Teams Data */
export type TeamsScores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


/** Teams Data */
export type TeamsUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Teams Data */
export type TeamsUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "teams" */
export type Teams_Aggregate = {
  __typename?: 'teams_aggregate';
  aggregate?: Maybe<Teams_Aggregate_Fields>;
  nodes: Array<Teams>;
};

/** aggregate fields of "teams" */
export type Teams_Aggregate_Fields = {
  __typename?: 'teams_aggregate_fields';
  avg?: Maybe<Teams_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Teams_Max_Fields>;
  min?: Maybe<Teams_Min_Fields>;
  stddev?: Maybe<Teams_Stddev_Fields>;
  stddev_pop?: Maybe<Teams_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Teams_Stddev_Samp_Fields>;
  sum?: Maybe<Teams_Sum_Fields>;
  var_pop?: Maybe<Teams_Var_Pop_Fields>;
  var_samp?: Maybe<Teams_Var_Samp_Fields>;
  variance?: Maybe<Teams_Variance_Fields>;
};


/** aggregate fields of "teams" */
export type Teams_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Teams_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Teams_Avg_Fields = {
  __typename?: 'teams_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "teams". All fields are combined with a logical 'AND'. */
export type Teams_Bool_Exp = {
  _and?: InputMaybe<Array<Teams_Bool_Exp>>;
  _not?: InputMaybe<Teams_Bool_Exp>;
  _or?: InputMaybe<Array<Teams_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  join_code?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  scores?: InputMaybe<Scores_Bool_Exp>;
  scores_aggregate?: InputMaybe<Scores_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "teams" */
export enum Teams_Constraint {
  /** unique or primary key constraint on columns "name" */
  TeamsNameKey = 'teams_name_key',
  /** unique or primary key constraint on columns "id" */
  TeamsPkey = 'teams_pkey'
}

/** input type for incrementing numeric columns in table "teams" */
export type Teams_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "teams" */
export type Teams_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  join_code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  scores?: InputMaybe<Scores_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Teams_Max_Fields = {
  __typename?: 'teams_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  join_code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Teams_Min_Fields = {
  __typename?: 'teams_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  join_code?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "teams" */
export type Teams_Mutation_Response = {
  __typename?: 'teams_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Teams>;
};

/** input type for inserting object relation for remote table "teams" */
export type Teams_Obj_Rel_Insert_Input = {
  data: Teams_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Teams_On_Conflict>;
};

/** on_conflict condition type for table "teams" */
export type Teams_On_Conflict = {
  constraint: Teams_Constraint;
  update_columns?: Array<Teams_Update_Column>;
  where?: InputMaybe<Teams_Bool_Exp>;
};

/** Ordering options when selecting data from "teams". */
export type Teams_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  join_code?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  scores_aggregate?: InputMaybe<Scores_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: teams */
export type Teams_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "teams" */
export enum Teams_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  JoinCode = 'join_code',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "teams" */
export type Teams_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  join_code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Teams_Stddev_Fields = {
  __typename?: 'teams_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Teams_Stddev_Pop_Fields = {
  __typename?: 'teams_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Teams_Stddev_Samp_Fields = {
  __typename?: 'teams_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "teams" */
export type Teams_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Teams_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Teams_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  join_code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Teams_Sum_Fields = {
  __typename?: 'teams_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "teams" */
export enum Teams_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  JoinCode = 'join_code',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Teams_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Teams_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Teams_Set_Input>;
  /** filter the rows which have to be updated */
  where: Teams_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Teams_Var_Pop_Fields = {
  __typename?: 'teams_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Teams_Var_Samp_Fields = {
  __typename?: 'teams_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Teams_Variance_Fields = {
  __typename?: 'teams_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Users Data */
export type Users = {
  __typename?: 'users';
  /** An array relationship */
  bans: Array<Bans>;
  /** An aggregate relationship */
  bans_aggregate: Bans_Aggregate;
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  email_verification_code: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  is_admin: Scalars['Boolean']['output'];
  is_email_verified: Scalars['Boolean']['output'];
  last_name: Scalars['String']['output'];
  salt: Scalars['String']['output'];
  /** An array relationship */
  scores: Array<Scores>;
  /** An aggregate relationship */
  scores_aggregate: Scores_Aggregate;
  /** An array relationship */
  submissions: Array<Submissions>;
  /** An aggregate relationship */
  submissions_aggregate: Submissions_Aggregate;
  /** An object relationship */
  team?: Maybe<Teams>;
  team_id?: Maybe<Scalars['bigint']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** Users Data */
export type UsersBansArgs = {
  distinct_on?: InputMaybe<Array<Bans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bans_Order_By>>;
  where?: InputMaybe<Bans_Bool_Exp>;
};


/** Users Data */
export type UsersBans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Bans_Order_By>>;
  where?: InputMaybe<Bans_Bool_Exp>;
};


/** Users Data */
export type UsersScoresArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


/** Users Data */
export type UsersScores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


/** Users Data */
export type UsersSubmissionsArgs = {
  distinct_on?: InputMaybe<Array<Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Submissions_Order_By>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};


/** Users Data */
export type UsersSubmissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Submissions_Order_By>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: InputMaybe<Users_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
  stddev?: InputMaybe<Users_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  bans?: InputMaybe<Bans_Bool_Exp>;
  bans_aggregate?: InputMaybe<Bans_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verification_code?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  hash?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_admin?: InputMaybe<Boolean_Comparison_Exp>;
  is_email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  salt?: InputMaybe<String_Comparison_Exp>;
  scores?: InputMaybe<Scores_Bool_Exp>;
  scores_aggregate?: InputMaybe<Scores_Aggregate_Bool_Exp>;
  submissions?: InputMaybe<Submissions_Bool_Exp>;
  submissions_aggregate?: InputMaybe<Submissions_Aggregate_Bool_Exp>;
  team?: InputMaybe<Teams_Bool_Exp>;
  team_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "hash" */
  UsersHashKey = 'users_hash_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "salt" */
  UsersSaltKey = 'users_salt_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  team_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  bans?: InputMaybe<Bans_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verification_code?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  is_email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  scores?: InputMaybe<Scores_Arr_Rel_Insert_Input>;
  submissions?: InputMaybe<Submissions_Arr_Rel_Insert_Input>;
  team?: InputMaybe<Teams_Obj_Rel_Insert_Input>;
  team_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verification_code?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  team_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verification_code?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verification_code?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  team_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verification_code?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  bans_aggregate?: InputMaybe<Bans_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verification_code?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  hash?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_admin?: InputMaybe<Order_By>;
  is_email_verified?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  salt?: InputMaybe<Order_By>;
  scores_aggregate?: InputMaybe<Scores_Aggregate_Order_By>;
  submissions_aggregate?: InputMaybe<Submissions_Aggregate_Order_By>;
  team?: InputMaybe<Teams_Order_By>;
  team_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerificationCode = 'email_verification_code',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  IsEmailVerified = 'is_email_verified',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Salt = 'salt',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  IsEmailVerified = 'is_email_verified'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  IsEmailVerified = 'is_email_verified'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verification_code?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  is_email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verification_code?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  is_admin?: InputMaybe<Scalars['Boolean']['input']>;
  is_email_verified?: InputMaybe<Scalars['Boolean']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  team_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  team_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerificationCode = 'email_verification_code',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Hash = 'hash',
  /** column name */
  Id = 'id',
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  IsEmailVerified = 'is_email_verified',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Salt = 'salt',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  team_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  team_id?: InputMaybe<Order_By>;
};
