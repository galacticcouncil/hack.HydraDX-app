// ================================= STATE =====================================

type GeneralState = {
  blockHash: string | null;
  blockNumber: number;
  currentScreen: string;
  savedScreen: boolean;
  extensionInitialized: boolean;
  extensionPresent: boolean;
};

// ================================ GETTERS ====================================

type GeneralGetters = {
  getBlockHash(state: GeneralState): string | null;
  getBlockNumber(state: GeneralState): number;
  blockInfo(
    state: GeneralState
  ): { blockHash: string | null; blockNumber: number };
  currentScreen(state: GeneralState): string;
  extensionInfo(
    state: GeneralState
  ): { extensionInitialized: boolean; extensionPresent: boolean };
};

// =============================== MUTATION ====================================

type GeneralMutations = {
  SET_BLOCK_NUMBER__GENERAL(state: GeneralState, payload: number): void;
  SET_BLOCK_HASH__GENERAL(state: GeneralState, payload: string | null): void;
  SET_EXTENSION_PRESENT__GENERAL(
    state: GeneralState,
    extensionPresent: boolean
  ): void;
  SET_EXTENSION_INITIALIZED__GENERAL(
    state: GeneralState,
    extensionInitialized: boolean
  ): void;
  SET_SCREEN__GENERAL(state: GeneralState, screen: string): void;
};

// =============================== ACTIONS =====================================

type GeneralActionAugments = Omit<
  ActionContext<GeneralState, MergedState>,
  'commit' | 'state' | 'dispatch'
> & {
  commit<K extends keyof MergedMutations>(
    key: K,
    payload: Parameters<MergedMutations[K]>[1]
  ): ReturnType<MergedMutations[K]>;
} & {
  dispatch<K extends keyof MergedActions>(
    key: K,
    payload: Parameters<MergedActions[K]>[1]
  ): ReturnType<MergedActions[K]>;
} & {
  state: GeneralState;
};

type GeneralActions = {
  updateBlockHashSMGeneral(
    context: GeneralActionAugments,
    payload: string | null
  ): void;
  updateBlockNumberSMGeneral(
    context: GeneralActionAugments,
    payload: number
  ): void;
};

// ================================ STORE ======================================

// Setup store type
type GeneralStore<S = GeneralState> = Omit<
  VuexStore<S>,
  'commit' | 'getters' | 'dispatch'
> & {
  commit<
    K extends keyof GeneralMutations,
    P extends Parameters<GeneralMutations[K]>[1]
  >(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<GeneralMutations[K]>;
} & {
  getters: {
    [K in keyof GeneralGetters]: ReturnType<GeneralGetters[K]>;
  };
} & {
  dispatch<K extends keyof GeneralActions>(
    key: K,
    payload: Parameters<GeneralActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<GeneralActions[K]>;
};