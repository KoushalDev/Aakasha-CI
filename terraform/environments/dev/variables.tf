variable "vpc_cidr" {
  type        = string
  description = "CIDR block for the dev VPC"
}

variable "availability_zones" {
  type        = list(string)
  description = "Availability zones for dev"
}

variable "public_subnets" {
  type        = list(string)
  description = "Public subnet CIDRs"
}

variable "private_subnets" {
  type        = list(string)
  description = "Private subnet CIDRs"
}
