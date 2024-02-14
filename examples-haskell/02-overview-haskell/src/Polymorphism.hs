{-# LANGUAGE DeriveFoldable #-}

module Polymorphism where

data Chain txs = GenesisBlock | Block (Chain txs) txs
    deriving (Show, Eq, Ord, Foldable)

myFavoriteNumber :: Int
myFavoriteNumber = 42

chain2 :: Chain Int
chain2 = Block chain1 4

chain2' :: Chain Int
chain2' = Block (Block GenesisBlock 2) 4

chain2'' :: Chain Int
chain2'' = GenesisBlock |> 2 |> 4

chain1 :: Chain Int
chain1 = Block GenesisBlock 2

chainLength :: Chain txs -> Int
chainLength GenesisBlock = 0
chainLength (Block c _)  = chainLength c + 1

hasBlock :: Eq txs => txs -> Chain txs -> Bool
hasBlock _ GenesisBlock = False
hasBlock x (Block c n)  = n == x || hasBlock x c

(|>) :: Chain txs -> txs -> Chain txs
(|>) = Block

infixl 5 |>

hasBlockProp :: (txs -> Bool) -> Chain txs -> Bool
hasBlockProp _ GenesisBlock = False
hasBlockProp p (Block c n)  = p n || hasBlockProp p c

aList :: [Int]
aList = 2 : 1 : [] -- [2, 1]

build :: Int -> Chain Int
build n
    | n <= 0    = GenesisBlock
    | otherwise = Block (build (n - 1)) n

infiniteChain :: Chain Int
infiniteChain = Block infiniteChain 42
