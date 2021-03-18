/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface FeedActivity {
  id: string;
  actor: string;
  object: object;
  verb: string;
  target?: string;
  to?: string[];
}

export interface GetFeedDTO {
  results: FeedActivity[];
  next: string;
}

export interface GetManyUserResponseDto {
  data: User[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface GetManyAccountResponseDto {
  data: Account[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface Account {
  id: number;
  compound_id: string;
  user_id: number;
  user: User;
  provider_type: string;
  provider_id: string;
  provider_account_id: string;
  refresh_token?: string;
  access_token?: string;
  access_token_expires?: string;
  is_token_valid: boolean;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  updated_at: string;
}

export interface GetManyPictureResponseDto {
  data: Picture[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface GetManyPictureTagResponseDto {
  data: PictureTag[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface GetManyPictureThemeResponseDto {
  data: PictureTheme[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface PictureThemeTranslation {
  pictureTheme: PictureTheme;
  id: number;
  label: string;
  locale: string;
}

export interface PictureTheme {
  id: number;
  name: string;
  translations: PictureThemeTranslation[];
  tags: PictureTag[];
  image: { fileUrl: string; name: string };

  /** @format date-time */
  updated_at: string;

  /** @format date-time */
  created_at: string;
}

export interface PictureTag {
  id: number;
  name: string;
  pictures: Picture[];
  themeId: number;
  theme: PictureTheme;
}

export interface PictureSignature {
  /** The status of the signature from originstamp */
  status: "UNDETERMINED" | "SUBMITTED_TO_ORIGINSTAMP" | "SUBMITTED_TO_BLOCKCHAIN" | "INCLUDED" | "TIMESTAMPED";

  /** Id of cryptocurrency where signature is */
  currency: "UNDEFINED" | "BITCOIN" | "ETHEREUM" | "AION" | "SUDKURIER";
  id: number;
  picture: Picture;
}

export interface Picture {
  id: string;
  name: string;
  url: string;
  userId: number;
  user: User;
  tags: PictureTag[];
  signatures: PictureSignature[];
  hash: string;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  updated_at: string;
  moderation_status: "IN_PROGRESS" | "ACCEPTED" | "REJECTED";
  exifData: { camera?: string; focal?: number; aperture?: number; iso?: number; shutter?: string };
  description: string;
  location: string;
  width: number;
  height: number;
  views: number;
  userLikes?: User[];
}

export interface User {
  /** Display a contact button on user profile */
  showContact: boolean;

  /** token used in url when sending mail to reset user's password */
  email_token: string;
  accounts: Account[];
  id: string;
  email: string;
  email_verified: string;
  image: { fileUrl: string; name: string };
  lastname: string;
  firstname: string;
  username: string;
  website?: string;
  location?: string;
  biography: string;
  interests: string[];

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  updated_at: string;
  superAdmin: boolean;
  pictures: Picture[];
  language: string;
  pictureLiked: Picture[];
}

export interface ContactUserRequestDTO {
  name: string;
  email: string;
  targetId: string;
  message: string;
}

export interface CreateManyUserDto {
  bulk: User[];
}

export interface UpdateAccountProviderDto {
  email: string;
  account: Account;
}

export interface CreateManyAccountDto {
  bulk: Account[];
}

export interface Errors {
  file: string;
  msg: string;
}

export interface UploadPictureDto {
  errors: Errors[];
  success: Picture[];
}

export interface TimestampData {
  currency_id?: number;
  private_key?: string;
  submit_status?: number;
  timestamp?: number;
  transaction?: string;
}

export interface TimestampBody {
  comment?: string;
  created?: boolean;
  date_created?: number;
  hash_string?: string;
  timestamps?: TimestampData[];
}

export interface CertificatesDTO {
  idImage: number;
  currencies: ("UNDEFINED" | "BITCOIN" | "ETHEREUM" | "AION" | "SUDKURIER")[];
}

export interface GetExifRequestDTO {
  file: object;
}

export interface GetExifResponseDTO {
  data: { camera?: string; focal?: number; aperture?: number; iso?: string; shutter?: string; gps?: object };
  description: string;
}

export interface GetUploadUrlRequestDTO {
  filesName: string[];
}

export interface GetUploadUrlResponseDTO {
  key: string;
  url: string;
}

export interface CreateManyPictureDto {
  bulk: Picture[];
}

export interface GetTagRequestDTO {
  file: object;
}

export interface CreateManyPictureTagDto {
  bulk: PictureTag[];
}

export interface GetPictureThemeDto {
  id: number;
  name: string;

  /** @format date-time */
  updated_at: string;

  /** @format date-time */
  created_at: string;
}

export interface CreatePictureThemeDto {
  name: string;
}

export interface CreateManyPictureThemeDto {
  bulk: CreatePictureThemeDto[];
}

export interface UpdatePictureThemeTranslationDto {
  id?: number;
  label: string;
  locale: string;
}

export interface UpdatePictureThemeDto {
  id: number;
  translations: UpdatePictureThemeTranslationDto[];
}

export interface GetManyResetPasswordResponseDto {
  data: ResetPassword[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface ResetPassword {
  id: string;

  /** @format date-time */
  createdAt: string;

  /** @format date-time */
  updatedAt: string;
  user: User;
}

export interface ChangePasswordDto {
  id: string;
  password: string;
}

export interface SendResetLinkDto {
  email: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  user: User;
}

export interface SignUpDto {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  recaptchaToken: string;
  language: string;
}

export interface SignUpResponseDto {
  user: User;
}

export interface GetManyFilterResponseDto {
  data: Filter[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface GetManyFilterStyleResponseDto {
  data: FilterStyle[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface FilterStyleTranslation {
  style: FilterStyle;
  id: number;
  label: string;
  locale: string;
}

export interface FilterStyle {
  id: number;
  translations: FilterStyleTranslation[];
  filters?: Filter[];
}

export interface FilterProductImage {
  id: number;
  name: string;
  url: string;
  filter: Filter;

  /** @format date-time */
  created_at: string;
}

export interface FilterExampleImage {
  id: number;
  name: string;
  url: string;
  filter: Filter;

  /** @format date-time */
  created_at: string;
}

export interface GetManyFilterCategoryResponseDto {
  data: FilterCategory[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface FilterCategoryTranslation {
  category: FilterCategory;
  id: number;
  label: string;
  locale: string;
}

export interface FilterCategory {
  id: number;
  translations: FilterCategoryTranslation[];
  highlighted: boolean;
  filters?: Filter[];

  /** @format date-time */
  created_at: string;
}

export interface Filter {
  id: number;
  name: string;
  file: { fileUrl: string; name: string };
  categoryId: number;
  styles: FilterStyle[];
  description: string;
  productImages?: FilterProductImage[];
  exampleImages?: FilterExampleImage[];
  price: number;
  category: FilterCategory;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  updated_at: string;
}

export interface CreateManyFilterDto {
  bulk: Filter[];
}

export interface CreateManyFilterCategoryDto {
  bulk: FilterCategory[];
}

export interface CreateManyFilterStyleDto {
  bulk: FilterStyle[];
}

export interface GetManyOfferResponseDto {
  data: Offer[];
  count: number;
  total: number;
  page: number;
  pageCount: number;
}

export interface OfferNameTranslation {
  offer: Offer;
  id: number;
  label: string;
  locale: string;
}

export interface OfferContentTranslation {
  offer: Offer;
  lineNumber: number;
  id: number;
  label: string;
  locale: string;
}

export interface Offer {
  id: number;
  name: OfferNameTranslation[];
  content: OfferContentTranslation[];
  price: number;
  parentOffer?: Offer;

  /** @format date-time */
  created_at: string;

  /** @format date-time */
  updated_at: string;
}

export interface CreateManyOfferDto {
  bulk: Offer[];
}

export namespace health {
  /**
   * No description
   * @name AppControllerGetHealth
   * @request GET:/api/health
   */
  export namespace AppControllerGetHealth {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace feed {
  /**
   * No description
   * @tags feed
   * @name GetAllFeeds
   * @request GET:/api/feed
   */
  export namespace GetAllFeeds {
    export type RequestParams = { limit: number; offset: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetFeedDTO;
  }
  /**
   * No description
   * @tags feed
   * @name FollowUser
   * @request GET:/api/feed/follow/{targetId}
   */
  export namespace FollowUser {
    export type RequestParams = { targetId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags feed
   * @name UnfollowUser
   * @request GET:/api/feed/unfollow/{targetId}
   */
  export namespace UnfollowUser {
    export type RequestParams = { targetId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags feed
   * @name IsFollowing
   * @request GET:/api/feed/is-following/{targetId}
   */
  export namespace IsFollowing {
    export type RequestParams = { targetId: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
}

export namespace users {
  /**
   * @description Check if current user is following user with id
   * @tags users
   * @name GetIsFollowingUser
   * @request GET:/api/users/{id}/is-following
   */
  export namespace GetIsFollowingUser {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = boolean;
  }
  /**
   * No description
   * @tags users
   * @name FollowAUser
   * @request POST:/api/users/{id}/follow
   */
  export namespace FollowAUser {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags users
   * @name UpdateOneBaseUserControllerUser
   * @summary Update one User
   * @request PATCH:/api/users/{id}
   */
  export namespace UpdateOneBaseUserControllerUser {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * No description
   * @tags users
   * @name GetOneBaseUserControllerUser
   * @summary Retrieve one User
   * @request GET:/api/users/{id}
   */
  export namespace GetOneBaseUserControllerUser {
    export type RequestParams = { id: string };
    export type RequestQuery = { fields?: string[]; join?: string[]; cache?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * No description
   * @tags users
   * @name ReplaceOneBaseUserControllerUser
   * @summary Replace one User
   * @request PUT:/api/users/{id}
   */
  export namespace ReplaceOneBaseUserControllerUser {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = User;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * No description
   * @tags users
   * @name DeleteOneBaseUserControllerUser
   * @summary Delete one User
   * @request DELETE:/api/users/{id}
   */
  export namespace DeleteOneBaseUserControllerUser {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags users
   * @name AddPictureToLightbox
   * @request POST:/api/users/like/{idPicture}
   */
  export namespace AddPictureToLightbox {
    export type RequestParams = { idPicture: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags users
   * @name RemovePictureFromLightbox
   * @request POST:/api/users/dislike/{idPicture}
   */
  export namespace RemovePictureFromLightbox {
    export type RequestParams = { idPicture: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = any;
  }
  /**
   * No description
   * @tags users
   * @name ContactUser
   * @request POST:/api/users/contact
   */
  export namespace ContactUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ContactUserRequestDTO;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
  /**
   * No description
   * @tags users
   * @name GetManyBaseUserControllerUser
   * @summary Retrieve many User
   * @request GET:/api/users
   */
  export namespace GetManyBaseUserControllerUser {
    export type RequestParams = {};
    export type RequestQuery = {
      fields?: string[];
      s?: string;
      filter?: string[];
      or?: string[];
      sort?: string[];
      join?: string[];
      limit?: number;
      offset?: number;
      page?: number;
      cache?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetManyUserResponseDto | User[];
  }
  /**
   * No description
   * @tags users
   * @name CreateOneBaseUserControllerUser
   * @summary Create one User
   * @request POST:/api/users
   */
  export namespace CreateOneBaseUserControllerUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = User;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * No description
   * @tags users
   * @name CreateManyBaseUserControllerUser
   * @summary Create many User
   * @request POST:/api/users/bulk
   */
  export namespace CreateManyBaseUserControllerUser {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateManyUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = User[];
  }
  /**
   * No description
   * @tags accounts
   * @name CreateOneBaseAccountControllerAccount
   * @summary Create one Account
   * @request POST:/api/users/{userId}/accounts
   */
  export namespace CreateOneBaseAccountControllerAccount {
    export type RequestParams = { userId: string };
    export type RequestQuery = {};
    export type RequestBody = Account;
    export type RequestHeaders = {};
    export type ResponseBody = Account;
  }
  /**
   * No description
   * @tags accounts
   * @name GetManyBaseAccountControllerAccount
   * @summary Retrieve many Account
   * @request GET:/api/users/{userId}/accounts
   */
  export namespace GetManyBaseAccountControllerAccount {
    export type RequestParams = { userId: string };
    export type RequestQuery = {
      fields?: string[];
      s?: string;
      filter?: string[];
      or?: string[];
      sort?: string[];
      join?: string[];
      limit?: number;
      offset?: number;
      page?: number;
      cache?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetManyAccountResponseDto | Account[];
  }
  /**
   * No description
   * @tags accounts
   * @name GetOneBaseAccountControllerAccount
   * @summary Retrieve one Account
   * @request GET:/api/users/{userId}/accounts/{id}
   */
  export namespace GetOneBaseAccountControllerAccount {
    export type RequestParams = { userId: string; id: number };
    export type RequestQuery = { fields?: string[]; join?: string[]; cache?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Account;
  }
  /**
   * No description
   * @tags accounts
   * @name UpdateOneBaseAccountControllerAccount
   * @summary Update one Account
   * @request PATCH:/api/users/{userId}/accounts/{id}
   */
  export namespace UpdateOneBaseAccountControllerAccount {
    export type RequestParams = { userId: string; id: number };
    export type RequestQuery = {};
    export type RequestBody = Account;
    export type RequestHeaders = {};
    export type ResponseBody = Account;
  }
  /**
   * No description
   * @tags accounts
   * @name ReplaceOneBaseAccountControllerAccount
   * @summary Replace one Account
   * @request PUT:/api/users/{userId}/accounts/{id}
   */
  export namespace ReplaceOneBaseAccountControllerAccount {
    export type RequestParams = { userId: string; id: number };
    export type RequestQuery = {};
    export type RequestBody = Account;
    export type RequestHeaders = {};
    export type ResponseBody = Account;
  }
  /**
   * No description
   * @tags accounts
   * @name DeleteOneBaseAccountControllerAccount
   * @summary Delete one Account
   * @request DELETE:/api/users/{userId}/accounts/{id}
   */
  export namespace DeleteOneBaseAccountControllerAccount {
    export type RequestParams = { userId: string; id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags accounts
   * @name CreateManyBaseAccountControllerAccount
   * @summary Create many Account
   * @request POST:/api/users/{userId}/accounts/bulk
   */
  export namespace CreateManyBaseAccountControllerAccount {
    export type RequestParams = { userId: string };
    export type RequestQuery = {};
    export type RequestBody = CreateManyAccountDto;
    export type RequestHeaders = {};
    export type ResponseBody = Account[];
  }
}

export namespace accountsProvider {
  /**
   * No description
   * @tags account-provider
   * @name UpdateOneBaseAccountProviderControllerAccount
   * @summary Update one Account
   * @request PATCH:/api/accounts-provider/{provider_id}
   */
  export namespace UpdateOneBaseAccountProviderControllerAccount {
    export type RequestParams = { provider_id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateAccountProviderDto;
    export type RequestHeaders = {};
    export type ResponseBody = Account;
  }
  /**
   * No description
   * @tags account-provider
   * @name GetOneBaseAccountProviderControllerAccount
   * @summary Retrieve one Account
   * @request GET:/api/accounts-provider/{provider_id}
   */
  export namespace GetOneBaseAccountProviderControllerAccount {
    export type RequestParams = { provider_id: string };
    export type RequestQuery = { fields?: string[]; join?: string[]; cache?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Account;
  }
  /**
   * No description
   * @tags account-provider
   * @name ReplaceOneBaseAccountProviderControllerAccount
   * @summary Replace one Account
   * @request PUT:/api/accounts-provider/{provider_id}
   */
  export namespace ReplaceOneBaseAccountProviderControllerAccount {
    export type RequestParams = { provider_id: string };
    export type RequestQuery = {};
    export type RequestBody = Account;
    export type RequestHeaders = {};
    export type ResponseBody = Account;
  }
  /**
   * No description
   * @tags account-provider
   * @name DeleteOneBaseAccountProviderControllerAccount
   * @summary Delete one Account
   * @request DELETE:/api/accounts-provider/{provider_id}
   */
  export namespace DeleteOneBaseAccountProviderControllerAccount {
    export type RequestParams = { provider_id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags account-provider
   * @name GetManyBaseAccountProviderControllerAccount
   * @summary Retrieve many Account
   * @request GET:/api/accounts-provider
   */
  export namespace GetManyBaseAccountProviderControllerAccount {
    export type RequestParams = {};
    export type RequestQuery = {
      fields?: string[];
      s?: string;
      filter?: string[];
      or?: string[];
      sort?: string[];
      join?: string[];
      limit?: number;
      offset?: number;
      page?: number;
      cache?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetManyAccountResponseDto | Account[];
  }
  /**
   * No description
   * @tags account-provider
   * @name CreateOneBaseAccountProviderControllerAccount
   * @summary Create one Account
   * @request POST:/api/accounts-provider
   */
  export namespace CreateOneBaseAccountProviderControllerAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Account;
    export type RequestHeaders = {};
    export type ResponseBody = Account;
  }
  /**
   * No description
   * @tags account-provider
   * @name CreateManyBaseAccountProviderControllerAccount
   * @summary Create many Account
   * @request POST:/api/accounts-provider/bulk
   */
  export namespace CreateManyBaseAccountProviderControllerAccount {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateManyAccountDto;
    export type RequestHeaders = {};
    export type ResponseBody = Account[];
  }
}

export namespace pictures {
  /**
   * @description Upload pictures and associates them to a user
   * @tags pictures
   * @name UploadPictures
   * @request POST:/api/pictures/upload
   */
  export namespace UploadPictures {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = { files?: File[] };
    export type RequestHeaders = { "Content-Type"?: string };
    export type ResponseBody = UploadPictureDto;
  }
  /**
   * @description Search the given picture id using the tineye API
   * @tags pictures
   * @name ReverseSearch
   * @request GET:/api/pictures/reverse-search/{id}
   */
  export namespace ReverseSearch {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Webhook called by the originstamp API when a picture signature status changes
   * @tags pictures
   * @name PictureSignatureWebhook
   * @request POST:/api/pictures/timestamp
   */
  export namespace PictureSignatureWebhook {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TimestampBody;
    export type RequestHeaders = {};
    export type ResponseBody = object[];
  }
  /**
   * @description Return zip with certificates and image
   * @tags pictures
   * @name GetCertificates
   * @request POST:/api/pictures/certificates
   */
  export namespace GetCertificates {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CertificatesDTO;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * @description Get exif data from given picture
   * @tags pictures
   * @name GetExifData
   * @request POST:/api/pictures/get-exif
   */
  export namespace GetExifData {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetExifRequestDTO;
    export type RequestHeaders = {};
    export type ResponseBody = GetExifResponseDTO;
  }
  /**
   * No description
   * @tags pictures
   * @name GetUploadUrls
   * @request POST:/api/pictures/get-upload-urls
   */
  export namespace GetUploadUrls {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetUploadUrlRequestDTO;
    export type RequestHeaders = {};
    export type ResponseBody = GetUploadUrlResponseDTO[];
  }
  /**
   * No description
   * @tags pictures
   * @name CreateManyBasePictureControllerPicture
   * @summary Create many Picture
   * @request POST:/api/pictures/bulk
   */
  export namespace CreateManyBasePictureControllerPicture {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateManyPictureDto;
    export type RequestHeaders = {};
    export type ResponseBody = Picture[];
  }
  /**
   * No description
   * @tags pictures
   * @name GetOneBasePictureControllerPicture
   * @summary Retrieve one Picture
   * @request GET:/api/pictures/{id}
   */
  export namespace GetOneBasePictureControllerPicture {
    export type RequestParams = { id: string };
    export type RequestQuery = { fields?: string[]; join?: string[]; cache?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Picture;
  }
  /**
   * No description
   * @tags pictures
   * @name UpdateOneBasePictureControllerPicture
   * @summary Update one Picture
   * @request PATCH:/api/pictures/{id}
   */
  export namespace UpdateOneBasePictureControllerPicture {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = Picture;
    export type RequestHeaders = {};
    export type ResponseBody = Picture;
  }
  /**
   * No description
   * @tags pictures
   * @name ReplaceOneBasePictureControllerPicture
   * @summary Replace one Picture
   * @request PUT:/api/pictures/{id}
   */
  export namespace ReplaceOneBasePictureControllerPicture {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = Picture;
    export type RequestHeaders = {};
    export type ResponseBody = Picture;
  }
  /**
   * No description
   * @tags pictures
   * @name DeleteOneBasePictureControllerPicture
   * @summary Delete one Picture
   * @request DELETE:/api/pictures/{id}
   */
  export namespace DeleteOneBasePictureControllerPicture {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags pictures
   * @name GetManyBasePictureControllerPicture
   * @summary Retrieve many Picture
   * @request GET:/api/pictures
   */
  export namespace GetManyBasePictureControllerPicture {
    export type RequestParams = {};
    export type RequestQuery = {
      fields?: string[];
      s?: string;
      filter?: string[];
      or?: string[];
      sort?: string[];
      join?: string[];
      limit?: number;
      offset?: number;
      page?: number;
      cache?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetManyPictureResponseDto | Picture[];
  }
  /**
   * No description
   * @tags pictures
   * @name CreateOneBasePictureControllerPicture
   * @summary Create one Picture
   * @request POST:/api/pictures
   */
  export namespace CreateOneBasePictureControllerPicture {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = Picture;
    export type RequestHeaders = {};
    export type ResponseBody = Picture;
  }
}

export namespace pictureTag {
  /**
   * @description Detect tags from given picture
   * @tags picture-tag
   * @name DetectTags
   * @request POST:/api/picture-tag/get-tags
   */
  export namespace DetectTags {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = GetTagRequestDTO;
    export type RequestHeaders = {};
    export type ResponseBody = string[];
  }
  /**
   * No description
   * @tags picture-tag
   * @name GetOneBasePictureTagControllerPictureTag
   * @summary Retrieve one PictureTag
   * @request GET:/api/picture-tag/{id}
   */
  export namespace GetOneBasePictureTagControllerPictureTag {
    export type RequestParams = { id: number };
    export type RequestQuery = { fields?: string[]; join?: string[]; cache?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = PictureTag;
  }
  /**
   * No description
   * @tags picture-tag
   * @name UpdateOneBasePictureTagControllerPictureTag
   * @summary Update one PictureTag
   * @request PATCH:/api/picture-tag/{id}
   */
  export namespace UpdateOneBasePictureTagControllerPictureTag {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = PictureTag;
    export type RequestHeaders = {};
    export type ResponseBody = PictureTag;
  }
  /**
   * No description
   * @tags picture-tag
   * @name ReplaceOneBasePictureTagControllerPictureTag
   * @summary Replace one PictureTag
   * @request PUT:/api/picture-tag/{id}
   */
  export namespace ReplaceOneBasePictureTagControllerPictureTag {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = PictureTag;
    export type RequestHeaders = {};
    export type ResponseBody = PictureTag;
  }
  /**
   * No description
   * @tags picture-tag
   * @name DeleteOneBasePictureTagControllerPictureTag
   * @summary Delete one PictureTag
   * @request DELETE:/api/picture-tag/{id}
   */
  export namespace DeleteOneBasePictureTagControllerPictureTag {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags picture-tag
   * @name GetManyBasePictureTagControllerPictureTag
   * @summary Retrieve many PictureTag
   * @request GET:/api/picture-tag
   */
  export namespace GetManyBasePictureTagControllerPictureTag {
    export type RequestParams = {};
    export type RequestQuery = {
      fields?: string[];
      s?: string;
      filter?: string[];
      or?: string[];
      sort?: string[];
      join?: string[];
      limit?: number;
      offset?: number;
      page?: number;
      cache?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetManyPictureTagResponseDto | PictureTag[];
  }
  /**
   * No description
   * @tags picture-tag
   * @name CreateOneBasePictureTagControllerPictureTag
   * @summary Create one PictureTag
   * @request POST:/api/picture-tag
   */
  export namespace CreateOneBasePictureTagControllerPictureTag {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PictureTag;
    export type RequestHeaders = {};
    export type ResponseBody = PictureTag;
  }
  /**
   * No description
   * @tags picture-tag
   * @name CreateManyBasePictureTagControllerPictureTag
   * @summary Create many PictureTag
   * @request POST:/api/picture-tag/bulk
   */
  export namespace CreateManyBasePictureTagControllerPictureTag {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateManyPictureTagDto;
    export type RequestHeaders = {};
    export type ResponseBody = PictureTag[];
  }
}

export namespace pictureThemes {
  /**
   * No description
   * @tags picture-themes
   * @name CreateOneBasePictureThemeControllerPictureTheme
   * @summary Create one PictureTheme
   * @request POST:/api/picture-themes
   */
  export namespace CreateOneBasePictureThemeControllerPictureTheme {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
  /**
   * No description
   * @tags picture-themes
   * @name GetManyBasePictureThemeControllerPictureTheme
   * @summary Retrieve many PictureTheme
   * @request GET:/api/picture-themes
   */
  export namespace GetManyBasePictureThemeControllerPictureTheme {
    export type RequestParams = {};
    export type RequestQuery = {
      fields?: string[];
      s?: string;
      filter?: string[];
      or?: string[];
      sort?: string[];
      join?: string[];
      limit?: number;
      offset?: number;
      page?: number;
      cache?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = { "X-Device-Locale"?: string };
    export type ResponseBody = GetPictureThemeDto[];
  }
  /**
   * No description
   * @tags picture-themes
   * @name UpdateOneBasePictureThemeControllerPictureTheme
   * @summary Update one PictureTheme
   * @request PATCH:/api/picture-themes/{id}
   */
  export namespace UpdateOneBasePictureThemeControllerPictureTheme {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = PictureTheme;
    export type RequestHeaders = {};
    export type ResponseBody = PictureTheme;
  }
  /**
   * No description
   * @tags picture-themes
   * @name GetOneBasePictureThemeControllerPictureTheme
   * @summary Retrieve one PictureTheme
   * @request GET:/api/picture-themes/{id}
   */
  export namespace GetOneBasePictureThemeControllerPictureTheme {
    export type RequestParams = { id: number };
    export type RequestQuery = { fields?: string[]; join?: string[]; cache?: number };
    export type RequestBody = never;
    export type RequestHeaders = { "X-Device-Locale"?: string };
    export type ResponseBody = GetPictureThemeDto;
  }
  /**
   * No description
   * @tags picture-themes
   * @name ReplaceOneBasePictureThemeControllerPictureTheme
   * @summary Replace one PictureTheme
   * @request PUT:/api/picture-themes/{id}
   */
  export namespace ReplaceOneBasePictureThemeControllerPictureTheme {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = UpdatePictureThemeDto;
    export type RequestHeaders = {};
    export type ResponseBody = PictureTheme;
  }
  /**
   * No description
   * @tags picture-themes
   * @name DeleteOneBasePictureThemeControllerPictureTheme
   * @summary Delete one PictureTheme
   * @request DELETE:/api/picture-themes/{id}
   */
  export namespace DeleteOneBasePictureThemeControllerPictureTheme {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags picture-themes
   * @name CreateManyBasePictureThemeControllerPictureTheme
   * @summary Create many PictureTheme
   * @request POST:/api/picture-themes/bulk
   */
  export namespace CreateManyBasePictureThemeControllerPictureTheme {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateManyPictureThemeDto;
    export type RequestHeaders = {};
    export type ResponseBody = PictureTheme[];
  }
}

export namespace resetPassword {
  /**
   * No description
   * @tags reset-password
   * @name GetResetLinkById
   * @summary Get reset password link entity
   * @request GET:/api/reset-password/{id}
   */
  export namespace GetResetLinkById {
    export type RequestParams = { id: string };
    export type RequestQuery = { fields?: string[]; join?: string[]; cache?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ResetPassword;
  }
  /**
   * No description
   * @tags reset-password
   * @name DeleteOneBaseResetPasswordControllerResetPassword
   * @summary Delete one ResetPassword
   * @request DELETE:/api/reset-password/{id}
   */
  export namespace DeleteOneBaseResetPasswordControllerResetPassword {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags reset-password
   * @name ChangePassword
   * @summary Update user password
   * @request POST:/api/reset-password/change
   */
  export namespace ChangePassword {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ChangePasswordDto;
    export type RequestHeaders = {};
    export type ResponseBody = boolean;
  }
  /**
   * No description
   * @tags reset-password
   * @name SendResetLink
   * @summary Send link to a user who has forgotten his password
   * @request POST:/api/reset-password/send-link
   */
  export namespace SendResetLink {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SendResetLinkDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export namespace auth {
  /**
   * No description
   * @tags auth
   * @name Login
   * @summary Logs in user
   * @request POST:/api/auth/login
   */
  export namespace Login {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginDto;
    export type RequestHeaders = {};
    export type ResponseBody = LoginResponseDto;
  }
  /**
   * No description
   * @tags auth
   * @name Signup
   * @summary Sign up user
   * @request POST:/api/auth/signup
   */
  export namespace Signup {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SignUpDto;
    export type RequestHeaders = {};
    export type ResponseBody = SignUpResponseDto;
  }
  /**
   * No description
   * @tags auth
   * @name AuthControllerConfirmEmail
   * @summary Confirm email
   * @request GET:/api/auth/confirm-email/{token}
   */
  export namespace AuthControllerConfirmEmail {
    export type RequestParams = { token: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
}

export namespace filters {
  /**
   * No description
   * @tags filters
   * @name CreateOneBaseFilterControllerFilter
   * @summary Create one Filter
   * @request POST:/api/filters
   */
  export namespace CreateOneBaseFilterControllerFilter {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Filter;
  }
  /**
   * No description
   * @tags filters
   * @name GetManyBaseFilterControllerFilter
   * @summary Retrieve many Filter
   * @request GET:/api/filters
   */
  export namespace GetManyBaseFilterControllerFilter {
    export type RequestParams = {};
    export type RequestQuery = {
      fields?: string[];
      s?: string;
      filter?: string[];
      or?: string[];
      sort?: string[];
      join?: string[];
      limit?: number;
      offset?: number;
      page?: number;
      cache?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetManyFilterResponseDto | Filter[];
  }
  /**
   * No description
   * @tags filters
   * @name UpdateOneBaseFilterControllerFilter
   * @summary Update one Filter
   * @request PATCH:/api/filters/{id}
   */
  export namespace UpdateOneBaseFilterControllerFilter {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Filter;
  }
  /**
   * No description
   * @tags filters
   * @name DeleteOneBaseFilterControllerFilter
   * @summary Delete one Filter
   * @request DELETE:/api/filters/{id}
   */
  export namespace DeleteOneBaseFilterControllerFilter {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
  /**
   * No description
   * @tags filters
   * @name GetOneBaseFilterControllerFilter
   * @summary Retrieve one Filter
   * @request GET:/api/filters/{id}
   */
  export namespace GetOneBaseFilterControllerFilter {
    export type RequestParams = { id: number };
    export type RequestQuery = { fields?: string[]; join?: string[]; cache?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Filter;
  }
  /**
   * No description
   * @tags filters
   * @name ReplaceOneBaseFilterControllerFilter
   * @summary Replace one Filter
   * @request PUT:/api/filters/{id}
   */
  export namespace ReplaceOneBaseFilterControllerFilter {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = Filter;
    export type RequestHeaders = {};
    export type ResponseBody = Filter;
  }
  /**
   * No description
   * @tags filters
   * @name CreateManyBaseFilterControllerFilter
   * @summary Create many Filter
   * @request POST:/api/filters/bulk
   */
  export namespace CreateManyBaseFilterControllerFilter {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateManyFilterDto;
    export type RequestHeaders = {};
    export type ResponseBody = Filter[];
  }
}

export namespace filterCategory {
  /**
   * No description
   * @tags filter-category
   * @name GetOneBaseFilterCategoryControllerFilterCategory
   * @summary Retrieve one FilterCategory
   * @request GET:/api/filter-category/{id}
   */
  export namespace GetOneBaseFilterCategoryControllerFilterCategory {
    export type RequestParams = { id: number };
    export type RequestQuery = { fields?: string[]; join?: string[]; cache?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FilterCategory;
  }
  /**
   * No description
   * @tags filter-category
   * @name UpdateOneBaseFilterCategoryControllerFilterCategory
   * @summary Update one FilterCategory
   * @request PATCH:/api/filter-category/{id}
   */
  export namespace UpdateOneBaseFilterCategoryControllerFilterCategory {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = FilterCategory;
    export type RequestHeaders = {};
    export type ResponseBody = FilterCategory;
  }
  /**
   * No description
   * @tags filter-category
   * @name ReplaceOneBaseFilterCategoryControllerFilterCategory
   * @summary Replace one FilterCategory
   * @request PUT:/api/filter-category/{id}
   */
  export namespace ReplaceOneBaseFilterCategoryControllerFilterCategory {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = FilterCategory;
    export type RequestHeaders = {};
    export type ResponseBody = FilterCategory;
  }
  /**
   * No description
   * @tags filter-category
   * @name DeleteOneBaseFilterCategoryControllerFilterCategory
   * @summary Delete one FilterCategory
   * @request DELETE:/api/filter-category/{id}
   */
  export namespace DeleteOneBaseFilterCategoryControllerFilterCategory {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags filter-category
   * @name GetManyBaseFilterCategoryControllerFilterCategory
   * @summary Retrieve many FilterCategory
   * @request GET:/api/filter-category
   */
  export namespace GetManyBaseFilterCategoryControllerFilterCategory {
    export type RequestParams = {};
    export type RequestQuery = {
      fields?: string[];
      s?: string;
      filter?: string[];
      or?: string[];
      sort?: string[];
      join?: string[];
      limit?: number;
      offset?: number;
      page?: number;
      cache?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetManyFilterCategoryResponseDto | FilterCategory[];
  }
  /**
   * No description
   * @tags filter-category
   * @name CreateOneBaseFilterCategoryControllerFilterCategory
   * @summary Create one FilterCategory
   * @request POST:/api/filter-category
   */
  export namespace CreateOneBaseFilterCategoryControllerFilterCategory {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FilterCategory;
    export type RequestHeaders = {};
    export type ResponseBody = FilterCategory;
  }
  /**
   * No description
   * @tags filter-category
   * @name CreateManyBaseFilterCategoryControllerFilterCategory
   * @summary Create many FilterCategory
   * @request POST:/api/filter-category/bulk
   */
  export namespace CreateManyBaseFilterCategoryControllerFilterCategory {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateManyFilterCategoryDto;
    export type RequestHeaders = {};
    export type ResponseBody = FilterCategory[];
  }
}

export namespace filterStyle {
  /**
   * No description
   * @tags filter-style
   * @name GetOneBaseFilterStyleControllerFilterStyle
   * @summary Retrieve one FilterStyle
   * @request GET:/api/filter-style/{id}
   */
  export namespace GetOneBaseFilterStyleControllerFilterStyle {
    export type RequestParams = { id: number };
    export type RequestQuery = { fields?: string[]; join?: string[]; cache?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = FilterStyle;
  }
  /**
   * No description
   * @tags filter-style
   * @name UpdateOneBaseFilterStyleControllerFilterStyle
   * @summary Update one FilterStyle
   * @request PATCH:/api/filter-style/{id}
   */
  export namespace UpdateOneBaseFilterStyleControllerFilterStyle {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = FilterStyle;
    export type RequestHeaders = {};
    export type ResponseBody = FilterStyle;
  }
  /**
   * No description
   * @tags filter-style
   * @name ReplaceOneBaseFilterStyleControllerFilterStyle
   * @summary Replace one FilterStyle
   * @request PUT:/api/filter-style/{id}
   */
  export namespace ReplaceOneBaseFilterStyleControllerFilterStyle {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = FilterStyle;
    export type RequestHeaders = {};
    export type ResponseBody = FilterStyle;
  }
  /**
   * No description
   * @tags filter-style
   * @name DeleteOneBaseFilterStyleControllerFilterStyle
   * @summary Delete one FilterStyle
   * @request DELETE:/api/filter-style/{id}
   */
  export namespace DeleteOneBaseFilterStyleControllerFilterStyle {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags filter-style
   * @name GetManyBaseFilterStyleControllerFilterStyle
   * @summary Retrieve many FilterStyle
   * @request GET:/api/filter-style
   */
  export namespace GetManyBaseFilterStyleControllerFilterStyle {
    export type RequestParams = {};
    export type RequestQuery = {
      fields?: string[];
      s?: string;
      filter?: string[];
      or?: string[];
      sort?: string[];
      join?: string[];
      limit?: number;
      offset?: number;
      page?: number;
      cache?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetManyFilterStyleResponseDto | FilterStyle[];
  }
  /**
   * No description
   * @tags filter-style
   * @name CreateOneBaseFilterStyleControllerFilterStyle
   * @summary Create one FilterStyle
   * @request POST:/api/filter-style
   */
  export namespace CreateOneBaseFilterStyleControllerFilterStyle {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FilterStyle;
    export type RequestHeaders = {};
    export type ResponseBody = FilterStyle;
  }
  /**
   * No description
   * @tags filter-style
   * @name CreateManyBaseFilterStyleControllerFilterStyle
   * @summary Create many FilterStyle
   * @request POST:/api/filter-style/bulk
   */
  export namespace CreateManyBaseFilterStyleControllerFilterStyle {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateManyFilterStyleDto;
    export type RequestHeaders = {};
    export type ResponseBody = FilterStyle[];
  }
}

export namespace offers {
  /**
   * No description
   * @tags offers
   * @name CreateOneBaseOfferControllerOffer
   * @summary Create one Offer
   * @request POST:/api/offers
   */
  export namespace CreateOneBaseOfferControllerOffer {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }
  /**
   * No description
   * @tags offers
   * @name GetManyBaseOfferControllerOffer
   * @summary Retrieve many Offer
   * @request GET:/api/offers
   */
  export namespace GetManyBaseOfferControllerOffer {
    export type RequestParams = {};
    export type RequestQuery = {
      fields?: string[];
      s?: string;
      filter?: string[];
      or?: string[];
      sort?: string[];
      join?: string[];
      limit?: number;
      offset?: number;
      page?: number;
      cache?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = { "X-Device-Locale"?: string };
    export type ResponseBody = Offer[];
  }
  /**
   * No description
   * @tags offers
   * @name GetOneBaseOfferControllerOffer
   * @summary Retrieve one Offer
   * @request GET:/api/offers/{id}
   */
  export namespace GetOneBaseOfferControllerOffer {
    export type RequestParams = { id: number };
    export type RequestQuery = { fields?: string[]; join?: string[]; cache?: number };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Offer;
  }
  /**
   * No description
   * @tags offers
   * @name UpdateOneBaseOfferControllerOffer
   * @summary Update one Offer
   * @request PATCH:/api/offers/{id}
   */
  export namespace UpdateOneBaseOfferControllerOffer {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = Offer;
    export type RequestHeaders = {};
    export type ResponseBody = Offer;
  }
  /**
   * No description
   * @tags offers
   * @name ReplaceOneBaseOfferControllerOffer
   * @summary Replace one Offer
   * @request PUT:/api/offers/{id}
   */
  export namespace ReplaceOneBaseOfferControllerOffer {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = Offer;
    export type RequestHeaders = {};
    export type ResponseBody = Offer;
  }
  /**
   * No description
   * @tags offers
   * @name DeleteOneBaseOfferControllerOffer
   * @summary Delete one Offer
   * @request DELETE:/api/offers/{id}
   */
  export namespace DeleteOneBaseOfferControllerOffer {
    export type RequestParams = { id: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @tags offers
   * @name CreateManyBaseOfferControllerOffer
   * @summary Create many Offer
   * @request POST:/api/offers/bulk
   */
  export namespace CreateManyBaseOfferControllerOffer {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateManyOfferDto;
    export type RequestHeaders = {};
    export type ResponseBody = Offer[];
  }
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: keyof Omit<Body, "body" | "bodyUsed">;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  clientBaseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  public clientBaseUrl: string = "undefined";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(value: string, key: string) {
    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);

    return keys
      .map((key) => {
        if (typeof query[key] === "object" && !Array.isArray(query[key])) {
          return this.toQueryString(query[key] as QueryParamsType);
        } else if (Array.isArray(query[key])) {
          return query[key].map((value) => this.addQueryParam(value, key));
        }
        return this.addQueryParam(query[key], key);
      })
      .map((param) => (Array.isArray(param) ? param.join("&") : param))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        if (Array.isArray(input[key])) {
          input[key].map((value) => data.append(key, value));
        } else {
          data.append(key, input[key]);
        }
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public getSession = (): Promise<any> => {
    return fetch(`${this.clientBaseUrl}/api/auth/session`)
      .then((res) => res.json())
      .then((session) => (Object.keys(session).length > 0 ? session : null));
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const session = await this.getSession();

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
        ...(session && session.token ? { Authorization: session.token } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}
/**
 * @title Andromak API
 * @version 1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags offers
   * @name CreateOneBaseOfferControllerOffer
   * @summary Create one Offer
   * @request UNDEFINED:undefined
   */
  createOneBaseOfferControllerOffer = (data: Offer, params: RequestParams = {}) =>
    this.request<Offer, any>({
      path: `undefined`,
      method: "UNDEFINED",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });

  health = {
    /**
     * No description
     *
     * @name AppControllerGetHealth
     * @request GET:/api/health
     */
    appControllerGetHealth: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/health`,
        method: "GET",
        ...params,
      }),
  };
  feed = {
    /**
     * No description
     *
     * @tags feed
     * @name GetAllFeeds
     * @request GET:/api/feed
     */
    getAllFeeds: (limit: number, offset: number, params: RequestParams = {}) =>
      this.request<GetFeedDTO, GetFeedDTO>({
        path: `/api/feed`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name FollowUser
     * @request GET:/api/feed/follow/{targetId}
     */
    followUser: (targetId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/feed/follow/${targetId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name UnfollowUser
     * @request GET:/api/feed/unfollow/{targetId}
     */
    unfollowUser: (targetId: string, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/feed/unfollow/${targetId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags feed
     * @name IsFollowing
     * @request GET:/api/feed/is-following/{targetId}
     */
    isFollowing: (targetId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/feed/is-following/${targetId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description Check if current user is following user with id
     *
     * @tags users
     * @name GetIsFollowingUser
     * @request GET:/api/users/{id}/is-following
     */
    getIsFollowingUser: (id: string, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/api/users/${id}/is-following`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name FollowAUser
     * @request POST:/api/users/{id}/follow
     */
    followAUser: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}/follow`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name UpdateOneBaseUserControllerUser
     * @summary Update one User
     * @request PATCH:/api/users/{id}
     */
    updateOneBaseUserControllerUser: (id: string, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/users/${id}`,
        method: "PATCH",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetOneBaseUserControllerUser
     * @summary Retrieve one User
     * @request GET:/api/users/{id}
     */
    getOneBaseUserControllerUser: (
      id: string,
      query?: { fields?: string[]; join?: string[]; cache?: number },
      params: RequestParams = {},
    ) =>
      this.request<User, any>({
        path: `/api/users/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name ReplaceOneBaseUserControllerUser
     * @summary Replace one User
     * @request PUT:/api/users/{id}
     */
    replaceOneBaseUserControllerUser: (id: string, data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/users/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name DeleteOneBaseUserControllerUser
     * @summary Delete one User
     * @request DELETE:/api/users/{id}
     */
    deleteOneBaseUserControllerUser: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name AddPictureToLightbox
     * @request POST:/api/users/like/{idPicture}
     */
    addPictureToLightbox: (idPicture: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/like/${idPicture}`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name RemovePictureFromLightbox
     * @request POST:/api/users/dislike/{idPicture}
     */
    removePictureFromLightbox: (idPicture: string, params: RequestParams = {}) =>
      this.request<any, any>({
        path: `/api/users/dislike/${idPicture}`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name ContactUser
     * @request POST:/api/users/contact
     */
    contactUser: (data: ContactUserRequestDTO, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/users/contact`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetManyBaseUserControllerUser
     * @summary Retrieve many User
     * @request GET:/api/users
     */
    getManyBaseUserControllerUser: (
      query?: {
        fields?: string[];
        s?: string;
        filter?: string[];
        or?: string[];
        sort?: string[];
        join?: string[];
        limit?: number;
        offset?: number;
        page?: number;
        cache?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetManyUserResponseDto | User[], any>({
        path: `/api/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name CreateOneBaseUserControllerUser
     * @summary Create one User
     * @request POST:/api/users
     */
    createOneBaseUserControllerUser: (data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name CreateManyBaseUserControllerUser
     * @summary Create many User
     * @request POST:/api/users/bulk
     */
    createManyBaseUserControllerUser: (data: CreateManyUserDto, params: RequestParams = {}) =>
      this.request<User[], any>({
        path: `/api/users/bulk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name CreateOneBaseAccountControllerAccount
     * @summary Create one Account
     * @request POST:/api/users/{userId}/accounts
     */
    createOneBaseAccountControllerAccount: (userId: string, data: Account, params: RequestParams = {}) =>
      this.request<Account, any>({
        path: `/api/users/${userId}/accounts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name GetManyBaseAccountControllerAccount
     * @summary Retrieve many Account
     * @request GET:/api/users/{userId}/accounts
     */
    getManyBaseAccountControllerAccount: (
      userId: string,
      query?: {
        fields?: string[];
        s?: string;
        filter?: string[];
        or?: string[];
        sort?: string[];
        join?: string[];
        limit?: number;
        offset?: number;
        page?: number;
        cache?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetManyAccountResponseDto | Account[], any>({
        path: `/api/users/${userId}/accounts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name GetOneBaseAccountControllerAccount
     * @summary Retrieve one Account
     * @request GET:/api/users/{userId}/accounts/{id}
     */
    getOneBaseAccountControllerAccount: (
      userId: string,
      id: number,
      query?: { fields?: string[]; join?: string[]; cache?: number },
      params: RequestParams = {},
    ) =>
      this.request<Account, any>({
        path: `/api/users/${userId}/accounts/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name UpdateOneBaseAccountControllerAccount
     * @summary Update one Account
     * @request PATCH:/api/users/{userId}/accounts/{id}
     */
    updateOneBaseAccountControllerAccount: (userId: string, id: number, data: Account, params: RequestParams = {}) =>
      this.request<Account, any>({
        path: `/api/users/${userId}/accounts/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name ReplaceOneBaseAccountControllerAccount
     * @summary Replace one Account
     * @request PUT:/api/users/{userId}/accounts/{id}
     */
    replaceOneBaseAccountControllerAccount: (userId: string, id: number, data: Account, params: RequestParams = {}) =>
      this.request<Account, any>({
        path: `/api/users/${userId}/accounts/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name DeleteOneBaseAccountControllerAccount
     * @summary Delete one Account
     * @request DELETE:/api/users/{userId}/accounts/{id}
     */
    deleteOneBaseAccountControllerAccount: (userId: string, id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/users/${userId}/accounts/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags accounts
     * @name CreateManyBaseAccountControllerAccount
     * @summary Create many Account
     * @request POST:/api/users/{userId}/accounts/bulk
     */
    createManyBaseAccountControllerAccount: (userId: string, data: CreateManyAccountDto, params: RequestParams = {}) =>
      this.request<Account[], any>({
        path: `/api/users/${userId}/accounts/bulk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  accountsProvider = {
    /**
     * No description
     *
     * @tags account-provider
     * @name UpdateOneBaseAccountProviderControllerAccount
     * @summary Update one Account
     * @request PATCH:/api/accounts-provider/{provider_id}
     */
    updateOneBaseAccountProviderControllerAccount: (
      provider_id: string,
      data: UpdateAccountProviderDto,
      params: RequestParams = {},
    ) =>
      this.request<Account, any>({
        path: `/api/accounts-provider/${provider_id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-provider
     * @name GetOneBaseAccountProviderControllerAccount
     * @summary Retrieve one Account
     * @request GET:/api/accounts-provider/{provider_id}
     */
    getOneBaseAccountProviderControllerAccount: (
      provider_id: string,
      query?: { fields?: string[]; join?: string[]; cache?: number },
      params: RequestParams = {},
    ) =>
      this.request<Account, any>({
        path: `/api/accounts-provider/${provider_id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-provider
     * @name ReplaceOneBaseAccountProviderControllerAccount
     * @summary Replace one Account
     * @request PUT:/api/accounts-provider/{provider_id}
     */
    replaceOneBaseAccountProviderControllerAccount: (provider_id: string, data: Account, params: RequestParams = {}) =>
      this.request<Account, any>({
        path: `/api/accounts-provider/${provider_id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-provider
     * @name DeleteOneBaseAccountProviderControllerAccount
     * @summary Delete one Account
     * @request DELETE:/api/accounts-provider/{provider_id}
     */
    deleteOneBaseAccountProviderControllerAccount: (provider_id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/accounts-provider/${provider_id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-provider
     * @name GetManyBaseAccountProviderControllerAccount
     * @summary Retrieve many Account
     * @request GET:/api/accounts-provider
     */
    getManyBaseAccountProviderControllerAccount: (
      query?: {
        fields?: string[];
        s?: string;
        filter?: string[];
        or?: string[];
        sort?: string[];
        join?: string[];
        limit?: number;
        offset?: number;
        page?: number;
        cache?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetManyAccountResponseDto | Account[], any>({
        path: `/api/accounts-provider`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-provider
     * @name CreateOneBaseAccountProviderControllerAccount
     * @summary Create one Account
     * @request POST:/api/accounts-provider
     */
    createOneBaseAccountProviderControllerAccount: (data: Account, params: RequestParams = {}) =>
      this.request<Account, any>({
        path: `/api/accounts-provider`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags account-provider
     * @name CreateManyBaseAccountProviderControllerAccount
     * @summary Create many Account
     * @request POST:/api/accounts-provider/bulk
     */
    createManyBaseAccountProviderControllerAccount: (data: CreateManyAccountDto, params: RequestParams = {}) =>
      this.request<Account[], any>({
        path: `/api/accounts-provider/bulk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  pictures = {
    /**
     * @description Upload pictures and associates them to a user
     *
     * @tags pictures
     * @name UploadPictures
     * @request POST:/api/pictures/upload
     */
    uploadPictures: (data: { files?: File[] }, params: RequestParams = {}) =>
      this.request<UploadPictureDto, any>({
        path: `/api/pictures/upload`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Search the given picture id using the tineye API
     *
     * @tags pictures
     * @name ReverseSearch
     * @request GET:/api/pictures/reverse-search/{id}
     */
    reverseSearch: (id: number, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/pictures/reverse-search/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Webhook called by the originstamp API when a picture signature status changes
     *
     * @tags pictures
     * @name PictureSignatureWebhook
     * @request POST:/api/pictures/timestamp
     */
    pictureSignatureWebhook: (data: TimestampBody, params: RequestParams = {}) =>
      this.request<object[], any>({
        path: `/api/pictures/timestamp`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Return zip with certificates and image
     *
     * @tags pictures
     * @name GetCertificates
     * @request POST:/api/pictures/certificates
     */
    getCertificates: (data: CertificatesDTO, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/pictures/certificates`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get exif data from given picture
     *
     * @tags pictures
     * @name GetExifData
     * @request POST:/api/pictures/get-exif
     */
    getExifData: (data: GetExifRequestDTO, params: RequestParams = {}) =>
      this.request<GetExifResponseDTO, any>({
        path: `/api/pictures/get-exif`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pictures
     * @name GetUploadUrls
     * @request POST:/api/pictures/get-upload-urls
     */
    getUploadUrls: (data: GetUploadUrlRequestDTO, params: RequestParams = {}) =>
      this.request<GetUploadUrlResponseDTO[], any>({
        path: `/api/pictures/get-upload-urls`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pictures
     * @name CreateManyBasePictureControllerPicture
     * @summary Create many Picture
     * @request POST:/api/pictures/bulk
     */
    createManyBasePictureControllerPicture: (data: CreateManyPictureDto, params: RequestParams = {}) =>
      this.request<Picture[], any>({
        path: `/api/pictures/bulk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pictures
     * @name GetOneBasePictureControllerPicture
     * @summary Retrieve one Picture
     * @request GET:/api/pictures/{id}
     */
    getOneBasePictureControllerPicture: (
      id: string,
      query?: { fields?: string[]; join?: string[]; cache?: number },
      params: RequestParams = {},
    ) =>
      this.request<Picture, any>({
        path: `/api/pictures/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pictures
     * @name UpdateOneBasePictureControllerPicture
     * @summary Update one Picture
     * @request PATCH:/api/pictures/{id}
     */
    updateOneBasePictureControllerPicture: (id: string, data: Picture, params: RequestParams = {}) =>
      this.request<Picture, any>({
        path: `/api/pictures/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pictures
     * @name ReplaceOneBasePictureControllerPicture
     * @summary Replace one Picture
     * @request PUT:/api/pictures/{id}
     */
    replaceOneBasePictureControllerPicture: (id: string, data: Picture, params: RequestParams = {}) =>
      this.request<Picture, any>({
        path: `/api/pictures/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pictures
     * @name DeleteOneBasePictureControllerPicture
     * @summary Delete one Picture
     * @request DELETE:/api/pictures/{id}
     */
    deleteOneBasePictureControllerPicture: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/pictures/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pictures
     * @name GetManyBasePictureControllerPicture
     * @summary Retrieve many Picture
     * @request GET:/api/pictures
     */
    getManyBasePictureControllerPicture: (
      query?: {
        fields?: string[];
        s?: string;
        filter?: string[];
        or?: string[];
        sort?: string[];
        join?: string[];
        limit?: number;
        offset?: number;
        page?: number;
        cache?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetManyPictureResponseDto | Picture[], any>({
        path: `/api/pictures`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags pictures
     * @name CreateOneBasePictureControllerPicture
     * @summary Create one Picture
     * @request POST:/api/pictures
     */
    createOneBasePictureControllerPicture: (data: Picture, params: RequestParams = {}) =>
      this.request<Picture, any>({
        path: `/api/pictures`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  pictureTag = {
    /**
     * @description Detect tags from given picture
     *
     * @tags picture-tag
     * @name DetectTags
     * @request POST:/api/picture-tag/get-tags
     */
    detectTags: (data: GetTagRequestDTO, params: RequestParams = {}) =>
      this.request<string[], any>({
        path: `/api/picture-tag/get-tags`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags picture-tag
     * @name GetOneBasePictureTagControllerPictureTag
     * @summary Retrieve one PictureTag
     * @request GET:/api/picture-tag/{id}
     */
    getOneBasePictureTagControllerPictureTag: (
      id: number,
      query?: { fields?: string[]; join?: string[]; cache?: number },
      params: RequestParams = {},
    ) =>
      this.request<PictureTag, any>({
        path: `/api/picture-tag/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags picture-tag
     * @name UpdateOneBasePictureTagControllerPictureTag
     * @summary Update one PictureTag
     * @request PATCH:/api/picture-tag/{id}
     */
    updateOneBasePictureTagControllerPictureTag: (id: number, data: PictureTag, params: RequestParams = {}) =>
      this.request<PictureTag, any>({
        path: `/api/picture-tag/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags picture-tag
     * @name ReplaceOneBasePictureTagControllerPictureTag
     * @summary Replace one PictureTag
     * @request PUT:/api/picture-tag/{id}
     */
    replaceOneBasePictureTagControllerPictureTag: (id: number, data: PictureTag, params: RequestParams = {}) =>
      this.request<PictureTag, any>({
        path: `/api/picture-tag/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags picture-tag
     * @name DeleteOneBasePictureTagControllerPictureTag
     * @summary Delete one PictureTag
     * @request DELETE:/api/picture-tag/{id}
     */
    deleteOneBasePictureTagControllerPictureTag: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/picture-tag/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags picture-tag
     * @name GetManyBasePictureTagControllerPictureTag
     * @summary Retrieve many PictureTag
     * @request GET:/api/picture-tag
     */
    getManyBasePictureTagControllerPictureTag: (
      query?: {
        fields?: string[];
        s?: string;
        filter?: string[];
        or?: string[];
        sort?: string[];
        join?: string[];
        limit?: number;
        offset?: number;
        page?: number;
        cache?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetManyPictureTagResponseDto | PictureTag[], any>({
        path: `/api/picture-tag`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags picture-tag
     * @name CreateOneBasePictureTagControllerPictureTag
     * @summary Create one PictureTag
     * @request POST:/api/picture-tag
     */
    createOneBasePictureTagControllerPictureTag: (data: PictureTag, params: RequestParams = {}) =>
      this.request<PictureTag, any>({
        path: `/api/picture-tag`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags picture-tag
     * @name CreateManyBasePictureTagControllerPictureTag
     * @summary Create many PictureTag
     * @request POST:/api/picture-tag/bulk
     */
    createManyBasePictureTagControllerPictureTag: (data: CreateManyPictureTagDto, params: RequestParams = {}) =>
      this.request<PictureTag[], any>({
        path: `/api/picture-tag/bulk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  pictureThemes = {
    /**
     * No description
     *
     * @tags picture-themes
     * @name CreateOneBasePictureThemeControllerPictureTheme
     * @summary Create one PictureTheme
     * @request POST:/api/picture-themes
     */
    createOneBasePictureThemeControllerPictureTheme: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/picture-themes`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags picture-themes
     * @name GetManyBasePictureThemeControllerPictureTheme
     * @summary Retrieve many PictureTheme
     * @request GET:/api/picture-themes
     */
    getManyBasePictureThemeControllerPictureTheme: (
      query?: {
        fields?: string[];
        s?: string;
        filter?: string[];
        or?: string[];
        sort?: string[];
        join?: string[];
        limit?: number;
        offset?: number;
        page?: number;
        cache?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetPictureThemeDto[], any>({
        path: `/api/picture-themes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags picture-themes
     * @name UpdateOneBasePictureThemeControllerPictureTheme
     * @summary Update one PictureTheme
     * @request PATCH:/api/picture-themes/{id}
     */
    updateOneBasePictureThemeControllerPictureTheme: (id: number, data: PictureTheme, params: RequestParams = {}) =>
      this.request<PictureTheme, any>({
        path: `/api/picture-themes/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags picture-themes
     * @name GetOneBasePictureThemeControllerPictureTheme
     * @summary Retrieve one PictureTheme
     * @request GET:/api/picture-themes/{id}
     */
    getOneBasePictureThemeControllerPictureTheme: (
      id: number,
      query?: { fields?: string[]; join?: string[]; cache?: number },
      params: RequestParams = {},
    ) =>
      this.request<GetPictureThemeDto, any>({
        path: `/api/picture-themes/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags picture-themes
     * @name ReplaceOneBasePictureThemeControllerPictureTheme
     * @summary Replace one PictureTheme
     * @request PUT:/api/picture-themes/{id}
     */
    replaceOneBasePictureThemeControllerPictureTheme: (
      id: number,
      data: UpdatePictureThemeDto,
      params: RequestParams = {},
    ) =>
      this.request<PictureTheme, any>({
        path: `/api/picture-themes/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags picture-themes
     * @name DeleteOneBasePictureThemeControllerPictureTheme
     * @summary Delete one PictureTheme
     * @request DELETE:/api/picture-themes/{id}
     */
    deleteOneBasePictureThemeControllerPictureTheme: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/picture-themes/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags picture-themes
     * @name CreateManyBasePictureThemeControllerPictureTheme
     * @summary Create many PictureTheme
     * @request POST:/api/picture-themes/bulk
     */
    createManyBasePictureThemeControllerPictureTheme: (data: CreateManyPictureThemeDto, params: RequestParams = {}) =>
      this.request<PictureTheme[], any>({
        path: `/api/picture-themes/bulk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  resetPassword = {
    /**
     * No description
     *
     * @tags reset-password
     * @name GetResetLinkById
     * @summary Get reset password link entity
     * @request GET:/api/reset-password/{id}
     */
    getResetLinkById: (
      id: string,
      query?: { fields?: string[]; join?: string[]; cache?: number },
      params: RequestParams = {},
    ) =>
      this.request<ResetPassword, void>({
        path: `/api/reset-password/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags reset-password
     * @name DeleteOneBaseResetPasswordControllerResetPassword
     * @summary Delete one ResetPassword
     * @request DELETE:/api/reset-password/{id}
     */
    deleteOneBaseResetPasswordControllerResetPassword: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/reset-password/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags reset-password
     * @name ChangePassword
     * @summary Update user password
     * @request POST:/api/reset-password/change
     */
    changePassword: (data: ChangePasswordDto, params: RequestParams = {}) =>
      this.request<boolean, void>({
        path: `/api/reset-password/change`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags reset-password
     * @name SendResetLink
     * @summary Send link to a user who has forgotten his password
     * @request POST:/api/reset-password/send-link
     */
    sendResetLink: (data: SendResetLinkDto, params: RequestParams = {}) =>
      this.request<void, void>({
        path: `/api/reset-password/send-link`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags auth
     * @name Login
     * @summary Logs in user
     * @request POST:/api/auth/login
     */
    login: (data: LoginDto, params: RequestParams = {}) =>
      this.request<LoginResponseDto, any>({
        path: `/api/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name Signup
     * @summary Sign up user
     * @request POST:/api/auth/signup
     */
    signup: (data: SignUpDto, params: RequestParams = {}) =>
      this.request<SignUpResponseDto, any>({
        path: `/api/auth/signup`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthControllerConfirmEmail
     * @summary Confirm email
     * @request GET:/api/auth/confirm-email/{token}
     */
    authControllerConfirmEmail: (token: string, params: RequestParams = {}) =>
      this.request<User, void>({
        path: `/api/auth/confirm-email/${token}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  filters = {
    /**
     * No description
     *
     * @tags filters
     * @name CreateOneBaseFilterControllerFilter
     * @summary Create one Filter
     * @request POST:/api/filters
     */
    createOneBaseFilterControllerFilter: (params: RequestParams = {}) =>
      this.request<Filter, any>({
        path: `/api/filters`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filters
     * @name GetManyBaseFilterControllerFilter
     * @summary Retrieve many Filter
     * @request GET:/api/filters
     */
    getManyBaseFilterControllerFilter: (
      query?: {
        fields?: string[];
        s?: string;
        filter?: string[];
        or?: string[];
        sort?: string[];
        join?: string[];
        limit?: number;
        offset?: number;
        page?: number;
        cache?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetManyFilterResponseDto | Filter[], any>({
        path: `/api/filters`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filters
     * @name UpdateOneBaseFilterControllerFilter
     * @summary Update one Filter
     * @request PATCH:/api/filters/{id}
     */
    updateOneBaseFilterControllerFilter: (id: number, params: RequestParams = {}) =>
      this.request<Filter, any>({
        path: `/api/filters/${id}`,
        method: "PATCH",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filters
     * @name DeleteOneBaseFilterControllerFilter
     * @summary Delete one Filter
     * @request DELETE:/api/filters/{id}
     */
    deleteOneBaseFilterControllerFilter: (id: number, params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/filters/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filters
     * @name GetOneBaseFilterControllerFilter
     * @summary Retrieve one Filter
     * @request GET:/api/filters/{id}
     */
    getOneBaseFilterControllerFilter: (
      id: number,
      query?: { fields?: string[]; join?: string[]; cache?: number },
      params: RequestParams = {},
    ) =>
      this.request<Filter, any>({
        path: `/api/filters/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filters
     * @name ReplaceOneBaseFilterControllerFilter
     * @summary Replace one Filter
     * @request PUT:/api/filters/{id}
     */
    replaceOneBaseFilterControllerFilter: (id: number, data: Filter, params: RequestParams = {}) =>
      this.request<Filter, any>({
        path: `/api/filters/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filters
     * @name CreateManyBaseFilterControllerFilter
     * @summary Create many Filter
     * @request POST:/api/filters/bulk
     */
    createManyBaseFilterControllerFilter: (data: CreateManyFilterDto, params: RequestParams = {}) =>
      this.request<Filter[], any>({
        path: `/api/filters/bulk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  filterCategory = {
    /**
     * No description
     *
     * @tags filter-category
     * @name GetOneBaseFilterCategoryControllerFilterCategory
     * @summary Retrieve one FilterCategory
     * @request GET:/api/filter-category/{id}
     */
    getOneBaseFilterCategoryControllerFilterCategory: (
      id: number,
      query?: { fields?: string[]; join?: string[]; cache?: number },
      params: RequestParams = {},
    ) =>
      this.request<FilterCategory, any>({
        path: `/api/filter-category/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-category
     * @name UpdateOneBaseFilterCategoryControllerFilterCategory
     * @summary Update one FilterCategory
     * @request PATCH:/api/filter-category/{id}
     */
    updateOneBaseFilterCategoryControllerFilterCategory: (
      id: number,
      data: FilterCategory,
      params: RequestParams = {},
    ) =>
      this.request<FilterCategory, any>({
        path: `/api/filter-category/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-category
     * @name ReplaceOneBaseFilterCategoryControllerFilterCategory
     * @summary Replace one FilterCategory
     * @request PUT:/api/filter-category/{id}
     */
    replaceOneBaseFilterCategoryControllerFilterCategory: (
      id: number,
      data: FilterCategory,
      params: RequestParams = {},
    ) =>
      this.request<FilterCategory, any>({
        path: `/api/filter-category/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-category
     * @name DeleteOneBaseFilterCategoryControllerFilterCategory
     * @summary Delete one FilterCategory
     * @request DELETE:/api/filter-category/{id}
     */
    deleteOneBaseFilterCategoryControllerFilterCategory: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/filter-category/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-category
     * @name GetManyBaseFilterCategoryControllerFilterCategory
     * @summary Retrieve many FilterCategory
     * @request GET:/api/filter-category
     */
    getManyBaseFilterCategoryControllerFilterCategory: (
      query?: {
        fields?: string[];
        s?: string;
        filter?: string[];
        or?: string[];
        sort?: string[];
        join?: string[];
        limit?: number;
        offset?: number;
        page?: number;
        cache?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetManyFilterCategoryResponseDto | FilterCategory[], any>({
        path: `/api/filter-category`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-category
     * @name CreateOneBaseFilterCategoryControllerFilterCategory
     * @summary Create one FilterCategory
     * @request POST:/api/filter-category
     */
    createOneBaseFilterCategoryControllerFilterCategory: (data: FilterCategory, params: RequestParams = {}) =>
      this.request<FilterCategory, any>({
        path: `/api/filter-category`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-category
     * @name CreateManyBaseFilterCategoryControllerFilterCategory
     * @summary Create many FilterCategory
     * @request POST:/api/filter-category/bulk
     */
    createManyBaseFilterCategoryControllerFilterCategory: (
      data: CreateManyFilterCategoryDto,
      params: RequestParams = {},
    ) =>
      this.request<FilterCategory[], any>({
        path: `/api/filter-category/bulk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  filterStyle = {
    /**
     * No description
     *
     * @tags filter-style
     * @name GetOneBaseFilterStyleControllerFilterStyle
     * @summary Retrieve one FilterStyle
     * @request GET:/api/filter-style/{id}
     */
    getOneBaseFilterStyleControllerFilterStyle: (
      id: number,
      query?: { fields?: string[]; join?: string[]; cache?: number },
      params: RequestParams = {},
    ) =>
      this.request<FilterStyle, any>({
        path: `/api/filter-style/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-style
     * @name UpdateOneBaseFilterStyleControllerFilterStyle
     * @summary Update one FilterStyle
     * @request PATCH:/api/filter-style/{id}
     */
    updateOneBaseFilterStyleControllerFilterStyle: (id: number, data: FilterStyle, params: RequestParams = {}) =>
      this.request<FilterStyle, any>({
        path: `/api/filter-style/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-style
     * @name ReplaceOneBaseFilterStyleControllerFilterStyle
     * @summary Replace one FilterStyle
     * @request PUT:/api/filter-style/{id}
     */
    replaceOneBaseFilterStyleControllerFilterStyle: (id: number, data: FilterStyle, params: RequestParams = {}) =>
      this.request<FilterStyle, any>({
        path: `/api/filter-style/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-style
     * @name DeleteOneBaseFilterStyleControllerFilterStyle
     * @summary Delete one FilterStyle
     * @request DELETE:/api/filter-style/{id}
     */
    deleteOneBaseFilterStyleControllerFilterStyle: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/filter-style/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-style
     * @name GetManyBaseFilterStyleControllerFilterStyle
     * @summary Retrieve many FilterStyle
     * @request GET:/api/filter-style
     */
    getManyBaseFilterStyleControllerFilterStyle: (
      query?: {
        fields?: string[];
        s?: string;
        filter?: string[];
        or?: string[];
        sort?: string[];
        join?: string[];
        limit?: number;
        offset?: number;
        page?: number;
        cache?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GetManyFilterStyleResponseDto | FilterStyle[], any>({
        path: `/api/filter-style`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-style
     * @name CreateOneBaseFilterStyleControllerFilterStyle
     * @summary Create one FilterStyle
     * @request POST:/api/filter-style
     */
    createOneBaseFilterStyleControllerFilterStyle: (data: FilterStyle, params: RequestParams = {}) =>
      this.request<FilterStyle, any>({
        path: `/api/filter-style`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags filter-style
     * @name CreateManyBaseFilterStyleControllerFilterStyle
     * @summary Create many FilterStyle
     * @request POST:/api/filter-style/bulk
     */
    createManyBaseFilterStyleControllerFilterStyle: (data: CreateManyFilterStyleDto, params: RequestParams = {}) =>
      this.request<FilterStyle[], any>({
        path: `/api/filter-style/bulk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  offers = {
    /**
     * No description
     *
     * @tags offers
     * @name CreateOneBaseOfferControllerOffer
     * @summary Create one Offer
     * @request POST:/api/offers
     */
    createOneBaseOfferControllerOffer: (params: RequestParams = {}) =>
      this.request<object, any>({
        path: `/api/offers`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags offers
     * @name GetManyBaseOfferControllerOffer
     * @summary Retrieve many Offer
     * @request GET:/api/offers
     */
    getManyBaseOfferControllerOffer: (
      query?: {
        fields?: string[];
        s?: string;
        filter?: string[];
        or?: string[];
        sort?: string[];
        join?: string[];
        limit?: number;
        offset?: number;
        page?: number;
        cache?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Offer[], any>({
        path: `/api/offers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags offers
     * @name GetOneBaseOfferControllerOffer
     * @summary Retrieve one Offer
     * @request GET:/api/offers/{id}
     */
    getOneBaseOfferControllerOffer: (
      id: number,
      query?: { fields?: string[]; join?: string[]; cache?: number },
      params: RequestParams = {},
    ) =>
      this.request<Offer, any>({
        path: `/api/offers/${id}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags offers
     * @name UpdateOneBaseOfferControllerOffer
     * @summary Update one Offer
     * @request PATCH:/api/offers/{id}
     */
    updateOneBaseOfferControllerOffer: (id: number, data: Offer, params: RequestParams = {}) =>
      this.request<Offer, any>({
        path: `/api/offers/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags offers
     * @name ReplaceOneBaseOfferControllerOffer
     * @summary Replace one Offer
     * @request PUT:/api/offers/{id}
     */
    replaceOneBaseOfferControllerOffer: (id: number, data: Offer, params: RequestParams = {}) =>
      this.request<Offer, any>({
        path: `/api/offers/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags offers
     * @name DeleteOneBaseOfferControllerOffer
     * @summary Delete one Offer
     * @request DELETE:/api/offers/{id}
     */
    deleteOneBaseOfferControllerOffer: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/offers/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags offers
     * @name CreateManyBaseOfferControllerOffer
     * @summary Create many Offer
     * @request POST:/api/offers/bulk
     */
    createManyBaseOfferControllerOffer: (data: CreateManyOfferDto, params: RequestParams = {}) =>
      this.request<Offer[], any>({
        path: `/api/offers/bulk`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
