module OverviewHaskell where

data Chain = GenesisBlock | Block Chain Txs
    deriving Show

type Txs = Int

myFavoriteNumber :: Int
myFavoriteNumber = 42

chain2 :: Chain
chain2 = Block chain1 4

chain2' :: Chain
chain2' = Block (Block GenesisBlock 2) 4

chain2'' :: Chain
chain2'' = GenesisBlock |> 2 |> 4

chain1 :: Chain
chain1 = Block GenesisBlock 2

chainLength :: Chain -> Int
chainLength GenesisBlock = 0
chainLength (Block c _)  = chainLength c + 1

hasBlock :: Txs -> Chain -> Bool
hasBlock _ GenesisBlock = False
hasBlock x (Block c n)  = n == x || hasBlock x c

(|>) :: Chain -> Txs -> Chain
(|>) = Block

infixl 5 |>

hasBlockProp :: (Txs -> Bool) -> Chain -> Bool
hasBlockProp _ GenesisBlock = False
hasBlockProp p (Block c n)  = p n || hasBlockProp p c
