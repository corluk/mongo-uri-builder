declare module mongouribuilder {
    /**
     * var mongoUriBuilder = require('mongo-uri-builder');
   
   var connectionString = mongoUriBuilder({
       username: 'user', // or user: 'user'
       password: 'pass',
       host: 'host1',
       port: 1111,
       replicas: [
           {host: 'host2', port: 2222},
           {host: 'host3', port: 3333}
       ],
       database: 'db',
       options: {
           w: 0,
           readPreference: 'secondary'
       }
   });
   
   console.log(connectionString); 
     */
       export interface MongoUriBuilderConfig {
           username :string , 
           password : string , 
           host : string  , 
           port : number , 
           replicas : {host:string, port :number}[]
           database: string ,
           options : {tls :boolean, 
            ssl:boolean, 
            tlsCertificateKeyFile:string , 
            tlsCertificateKeyFilePassword :string, 
            tlsCAFile : string , 
            tlsAllowInvalidCertificates:string , 
            tlsAllowInvalidHostnames:boolean, 
            tlsInsecure : boolean, 
            connectTimeoutMS : number , 
            socketTimeoutMS : number  , 
            compressors : string ,
            zlibCompressionLevel:number , 
            maxPoolSize: number , 
            minPoolSize :number , 
            maxIdleTimeMS : number, 
            waitQueueMultiple : number , 
            waitQueueTimeoutMS : number ,
            w: number | string , 
            wtimeoutMS : number , 
            journal : boolean , 
            readConcernLevel : string , 
            readPreference : string , 
            maxStalenessSeconds :number , 
            readPreferenceTags : string , 
            authSource :string , 
            authMechanism :string , 
            authMechanismProperties : string , 
            gssapiServiceName:string, 
            localThresholdMS :number , 
            serverSelectionTimeoutMS :number ,
            serverSelectionTryOnce: boolean ,
            heartbeatFrequencyMS :number , 
            appName : string , 
            retryWrites: boolean,
            uuidRepresentation:string, 

        }

       }
       export default (config:MongoUriBuilderConfig) => string 
   
    }