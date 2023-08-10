import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { uuidGenerator } from "@/shared/utilities/uuidGenerator";
import {
  BlockModel,
  blockTypes,
  blockTypesWithDetails,
} from "@/shared/constants/blockTypes";

interface WallState {
  [key: string]: {
    blocks: {
      [key: string]: BlockModel;
    };
    wallName: string;
    id: string;
  };
}

const initialBlockState = {
  [`${blockTypes.text}-${uuidGenerator()}`]:
    blockTypesWithDetails[blockTypes.text],
  [`${blockTypes.input}-${uuidGenerator()}`]:
    blockTypesWithDetails[blockTypes.input],
};

const initialState = {} as WallState;

export const wallsSlice = createSlice({
  name: "walls",
  initialState,
  reducers: {
    reset: () => initialState,
    addWall: (state, action: PayloadAction<string>) => {
      const wallId = uuidGenerator();
      state[wallId] = {
        wallName: action.payload,
        blocks: initialBlockState,
        id: wallId,
      };
    },
    renameWall: (state) => {},
    removeWall: (state) => {},
    addBlockToWall: (state, action) => {
      const wallId = action.payload.wallId;
      state[wallId].blocks = {
        ...action.payload.block,
        ...state[wallId].blocks,
      };
    },
    removeBlockById: (state, action) => {
      const wallId = action.payload.wallId;
      const blockId = action.payload.blockId;
      delete state[wallId].blocks[blockId];
    },
    reorderBlocks: (state, action) => {
      const wallId = action.payload.wallId;
      state[wallId].blocks = action.payload.blocks;
    },
    editBlockEditorData: (state, action) => {
      const wallId = action.payload.wallId;
      const blockId = action.payload.blockId;
      const editorData = action.payload.data;

      state[wallId].blocks[blockId] = {
        ...state[wallId].blocks[blockId],
        editorData,
      };
    },
    editBlockViewerData: (state, action) => {
      const wallId = action.payload.wallId;
      const blockId = action.payload.blockId;
      const viewerData = action.payload.data;

      state[wallId].blocks[blockId] = {
        ...state[wallId].blocks[blockId],
        viewerData,
      };
    },
  },
});

export const {
  reset,
  addWall,
  addBlockToWall,
  reorderBlocks,
  removeBlockById,
  editBlockEditorData,
  editBlockViewerData,
} = wallsSlice.actions;

export const wallState = (state: RootState) => state.walls;

export default wallsSlice.reducer;
