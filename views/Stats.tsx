import React from 'react';
import { MintButton } from '../components/buttons';
import Card from '../components/Card';
import NftCard from '../components/NftCard';

interface StatsProps {
    nftData: {
        itemsRemaining: number;
        itemsAvailable: number;
        itemsRedeemed: number;
        itemPrice: any;
    };
    mintData: {
        candyMachine: any;
        isUserMinting: any;
        onMint: any;
    };
}

const Stats = (props: StatsProps) => {
    return (
        
        
        <div className="flex bg-base-500 px-1000 py-10">
            
              {/* Right */}
              <div className="conatiner flex flex-wrap w-1/2 justify-center items-center ">
                <div className="container flex flex-col items-center">
               
                </div>
            </div>
            <div> 
                    </div>
           
         {/* left */}
            <div className="container  flex flex-wrap w-1/2 justify-center items-center ">
                <div className="container flex flex-wrap ">
                <div><NftCard />
                <MintButton
                            candyMachine={props.mintData.candyMachine}
                            isMinting={props.mintData.isUserMinting}
                            onMint={props.mintData.onMint}
                        />
                </div>
                    
                    {
                        // eslint-disable-next-line no-constant-condition
                        props.nftData.itemsAvailable == 0 ? (
                            <Card value={'Login with your wallet to see'} />
                        ) : (
                            <> 
                                <Card title={'Token Name'} value={'POT'} />
                                <Card title={'Token Price'} value={`◎ ${props.nftData.itemPrice}`} />
                                <Card title={'Total potato'} value={props.nftData.itemsAvailable} />
                                <Card title={'Total Minted'} value={props.nftData.itemsRedeemed} />
                                <Card title={'Remaining'} value={props.nftData.itemsRemaining} />
                                <Card title={'currency'} value={`$ `} />
                                
                            </>
                            
                        )
                        
                    }
                    
                </div>
                
            </div>
           { /*Right*/}
            <div className="conatiner flex flex-wrap w-1/2 justify-center items-center ">
                <div className="container flex flex-col items-center">
                    
                   
                </div>
            </div>
            
        </div>
       
    );
};

export default Stats;
